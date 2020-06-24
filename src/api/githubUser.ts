import axios from 'axios';

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubConfig = {
  headers: {
    Authorization: TOKEN ? `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` : {}
  }
};

export function getUserDetails(name: number | string) {
  const apiUrl = `${process.env.REACT_APP_API_URL}/users/${name}`;

  return axios.get(apiUrl);
}

export function getUserRepos(name: number | string, page?: number) {
  const apiUrl = `${process.env.REACT_APP_API_URL}/users/${name}/repos?type=owner&per_page=100&page=${page}`;

  return axios.get(apiUrl, githubConfig);
}
