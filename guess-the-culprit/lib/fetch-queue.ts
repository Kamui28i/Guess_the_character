class FetchQueue {
  private queue: (() => Promise<void>)[] = [];
  private isProcessing = false;

  enqueue(task: () => Promise<void>) {
    this.queue.push(task);
    this.process();
  }

  private async process() {
    if (this.isProcessing) return;
    this.isProcessing = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        await task();
        // Wait 400ms between requests to respect Jikan's 3 req/sec limit
        await new Promise((resolve) => setTimeout(resolve, 400));
      }
    }

    this.isProcessing = false;
  }
}

export const imageFetchQueue = new FetchQueue();
