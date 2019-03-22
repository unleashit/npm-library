import AppState from './state';
import mockData from '@unleashit/mock-data';

class ApiService extends AppState {
  async generateFakeBlog(total = 10) {
    if (this.keyExists('fakeBlog')) {
      return this.getKey('fakeBlog');
    }

    const data = await mockData({ template: 'article', total });

    this.mergeWithState({ fakeBlog: data.article });
    return data;
  }
}

export default ApiService;
