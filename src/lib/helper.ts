import { Writable } from 'svelte/store'

export class Stat {
  dict: {
    [id: string]: number;
  } = {};
  add(key: string): void {
    if (this.dict[key] === undefined) {
      this.dict[key] = 0;
    }
    this.dict[key]++;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop(): void { }

/** Callback to inform of a value updates. */
type Subscriber<T> = (value: T) => void;

/** Unsubscribes from value updates. */
type Unsubscriber = () => void;

/** Callback to update a value. */
type Updater<T> = (value: T) => T;

/** Cleanup logic callback. */
type Invalidator<T> = (value?: T) => void;

/** Start and stop notification callbacks. */
type StartStopNotifier<T> = (set: Subscriber<T>) => Unsubscriber | void;

/** Pair of subscriber and invalidator. */
type SubscribeInvalidateTuple<T> = [Subscriber<T>, Invalidator<T>];

/* eslint-disable @typescript-eslint/no-explicit-any */
export class WritableClass implements Writable<any> {
  private _subscribers: SubscribeInvalidateTuple<any>[];
  private _subscriber_queue = [];
  private _stop?: Unsubscriber;
  private _start: StartStopNotifier<any>;

  constructor(start: StartStopNotifier<any> = noop) {
    this._subscribers = [];
    this._start = start;
  }

  _notifyAll(): void {
    const runQueue = !this._subscriber_queue.length;
    for (let i = 0; i < this._subscribers.length; i += 1) {
      const s = this._subscribers[i];
      s[1]();
      this._subscriber_queue.push(s, this);
    }
    if (runQueue) {
      for (let i = 0; i < this._subscriber_queue.length; i += 2) {
        this._subscriber_queue[i][0](this._subscriber_queue[i + 1]);
      }
      this._subscriber_queue.length = 0;
    }
  }

  subscribe(run: Subscriber<any>, invalidate: Invalidator<any> = noop): Unsubscriber {
    const subscriber: SubscribeInvalidateTuple<any> = [run, invalidate];
    this._subscribers.push(subscriber);
    if (this._subscribers.length === 1) {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      this._stop = this._start(this.set) || noop;
    }

    run(this);

    return (): void => {
      const index = this._subscribers.indexOf(subscriber);
      if (index !== -1) {
        this._subscribers.splice(index, 1);
      }
      if (this._subscribers.length === 0) {
        this._stop();
        this._stop = null;
      }
    }
  }

  set(data: any): void {
    Object.getOwnPropertyNames(this)
      .filter(prop => !prop.startsWith('_'))
      .forEach(prop => {
        data[prop] && (this[prop] = data[prop]);
      });
    if (this._stop) {
      this._notifyAll();
    }
  }

  update(fn: Updater<any>): void {
    this.set(fn(this));
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
