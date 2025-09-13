import '@testing-library/jest-dom/vitest';

// See https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment.

// @ts-expect-error: React testing environment flag not in TS types
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
