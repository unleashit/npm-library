import mockData from '@unleashit/mock-data';

import AppState from './state';
import { complexJsonTemplate } from './templates';

/*
  cacheTime = -1: caching off
  cacheTime = 0: always use cache if available
  cacheTime > 0: cache duration is cacheTime in milliseconds
 */

class ApiService extends AppState {
  async _generate(templateArgs, cacheTime) {
    const stateKey = templateArgs.name;
    if (!stateKey) {
      throw new Error('Name is a required property for _generate()');
    }

    const cached = this.useCache(stateKey, cacheTime);
    if (cacheTime >= 0 && cached) return cached;

    const { [stateKey]: data } = await mockData({
      ...templateArgs,
    });

    this.mergeWithState({ [stateKey]: data });
    return data;
  }

  async generateFakeBlog({ total = 10, cacheTime = 0 }) {
    return await this._generate(
      {
        template: 'article',
        name: 'fakeBlog',
        total,
      },
      cacheTime,
    );
  }

  async generateFakeUsers({ total = 10, cacheTime = 0 }) {
    return await this._generate(
      {
        template: 'user',
        name: 'fakeUsers',
        total,
      },
      cacheTime,
    );
  }

  async generateFakeProducts({ total = 10, cacheTime = 0 }) {
    return await this._generate(
      {
        template: 'product',
        name: 'fakeProducts',
        total,
      },
      cacheTime,
    );
  }

  async generateFakeOrders({ total = 10, cacheTime = 0 }) {
    return await this._generate(
      {
        template: 'order',
        name: 'fakeProducts',
        total,
      },
      cacheTime,
    );
  }

  generateComplexJson({ total = 10, cacheTime = 0 }) {
    return this._generate(
      {
        template: complexJsonTemplate,
        name: 'complexJson',
        total,
      },
      cacheTime,
    );
  }
}

export default ApiService;
