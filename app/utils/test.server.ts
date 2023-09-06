// @ts-nocheck

let chau: string;

// Try updating the app and notice the Date.now() is from the initial run, and the process PID remains the same.
(() => {
  // 15
  console.log(">>> server", process.pid);
  if (!(global as any).__test__) {
    console.log(">>> test ", (global as any).__test__);
    (global as any).__test__ = "test! " + Date.now();
  }

  chau = (global as any).__test__;
})();

export { chau };
