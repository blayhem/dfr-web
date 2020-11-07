function importAll(r) {
  return r
    .keys()
    .reverse()
    .map((fileName) => ({
      link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
      module: r(fileName),
    }));
}

export default importAll(require.context('../pages/blog', true, /\.mdx$/));
