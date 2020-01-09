export default (repos, { text, language, type }) => {
  return repos.filter((repo) => {
    const textMatch = repo.name.toLowerCase().includes(text.toLowerCase());
    const langMatch = repo.language && repo.language.toLowerCase().includes(language.toLowerCase());
    const typeMatch = repo.owner.type &&  repo.owner.type.toLowerCase().includes(type.toLowerCase());
    return textMatch && langMatch && typeMatch;
  })
};
