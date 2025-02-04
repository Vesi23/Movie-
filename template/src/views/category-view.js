export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

const toSingleCategoryView = (category) => `
<div class="category-card">
   <h1>${category.name}</h1>
   <p>${category.moviesCount} ${category.moviesCount > 1 ? 'Movies': 'Movie'}</p>
   <button id=${category.id} class="category-view-btn details-btn">View category</button>
</div>`;