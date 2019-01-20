const requests = [
  { name: 'repos', path: '/github/repos', method: 'GET' },
  { name: 'commits', path: '/github/commits', method: 'GET' },
  { name: 'statuses', path: '/statuses', method: 'GET' },
];

function addRequests(api) {
  requests.forEach((req) => {
    const { name, path, method } = req;
    api.add_request(name, path, method);
  });
}

export default async function () {
  const wasmLib = await import('@/lib/pkg');
  const api = new wasmLib.Api(process.env.VUE_APP_HOST, true);
  addRequests(api);
  return api;
}
