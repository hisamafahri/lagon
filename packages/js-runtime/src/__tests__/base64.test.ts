import { describe, it, expect } from 'vitest';
import '../';

describe('base64', () => {
  it('should encode with atob', async () => {
    expect(atob('Hello World')).toEqual('\x1Dée¡j+\x95');
  });

  it('should decode with btoa', async () => {
    expect(btoa('\x1Dée¡j+\x95')).toEqual('HelloWorlQ==');
  });
});
