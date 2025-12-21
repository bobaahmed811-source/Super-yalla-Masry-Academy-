type Events = { 'permission-error': (error: any) => void };

class TypedEventEmitter {
  private listeners: any = {};
  on(event: string, callback: any) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }
  emit(event: string, ...args: any[]) {
    if (this.listeners[event]) this.listeners[event].forEach((l: any) => l(...args));
  }
}
export const errorEmitter = new TypedEventEmitter();
