import _ from 'lodash';
const selectCategory = (category, categories, setCategories) => {
  const isSelected = categories.filter(item => {
    return item.id === category.id;
  });
  console.log(isSelected);
  if (isSelected.length <= 0) {
    let newSelectedImages = categories.filter(item => {
      return item !== category;
    });
    setCategories(newSelectedImages);
    console.log('no');
  } else {
    setCategories([...categories, category]);
    console.log('yes');
  }
};
export default selectCategory;
