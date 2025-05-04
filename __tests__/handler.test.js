import { describe, it, expect } from 'vitest';
import { hello } from '../handler.js';

describe('hello function', () => {
  it('returns default greeting when no queryStringParameters are provided', async () => {
    const event = {};
    const result = await hello(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body)).toEqual({ message: 'Hello, World!' });
  });

  it('returns personalized greeting when name is provided', async () => {
    const event = {
      queryStringParameters: { name: 'Carlos' },
    };
    const result = await hello(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body)).toEqual({ message: 'Hello, Carlos!' });
  });

  it('returns default greeting when name is null', async () => {
    const event = {
      queryStringParameters: { name: null },
    };
    const result = await hello(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body)).toEqual({ message: 'Hello, World!' });
  });

  it('returns default greeting when name is undefined', async () => {
    const event = {
      queryStringParameters: { name: undefined },
    };
    const result = await hello(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body)).toEqual({ message: 'Hello, World!' });
  });

  it('returns empty greeting when name is an empty string', async () => {
    const event = {
      queryStringParameters: { name: '' },
    };
    const result = await hello(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body)).toEqual({ message: 'Hello, !' });
  });
});

