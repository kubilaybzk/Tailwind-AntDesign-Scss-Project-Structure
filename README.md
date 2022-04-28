
# Tailwind-AntDesign-Scss-Project-Structure


Thanks to this project, you can develop your own components using Tailwind, prepare a costum theme using AntDesign, use the components developed by the ant design community, and give the desired edits to the html tags using Scss.


## Specifications
* Tailwind
* AntDesign
* Scss

  

Tailwind             |  Ant Design
:-------------------------:|:-------------------------:
![Logo](https://cdn-contents.anymindgroup.com/corporate/wp-uploads/2021/08/05165454/Tailwindcss.png)  | ![Logo2](https://www.nobleprog.com.tr/sites/hitrahr/files/category_images/height100_scale/ant_design_training.png?t=657a5cd8)

## İnstall 


```bash 
  git clone https://github.com/kubilaybzk/Tailwind-AntDesign-Scss-Project-Structure.git
  cd Tailwind-AntDesign-Scss-Project-Structure
  code . // 'For open vs code '
  npm i 
  npm run dev 

```
    
## Demo



![Ss1](https://github.com/kubilaybzk/Tailwind-AntDesign-Scss-Project-Structure/blob/main/ScreenShots/Ekran%20G%C3%B6r%C3%BCnt%C3%BCs%C3%BC%20-%202022-04-28%2009-14-25.png)
![ss2](https://github.com/kubilaybzk/Tailwind-AntDesign-Scss-Project-Structure/blob/main/ScreenShots/Ekran%20G%C3%B6r%C3%BCnt%C3%BCs%C3%BC%20-%202022-04-28%2009-14-42.png)
## Customize AntDesign Theme

https://ant.design/docs/react/customize-theme


 

**in out project it has**

    .
    ├── ...
    ├── styles                      # Test files (alternatively `spec` or `tests`)
    │   ├── globals.css             # you special global scss
    │   ├── tailwind.scss           # For import Tailwind.
    │   └── variables.less          # Configure antdesign themes
    └── ...


**For example (variables.less) =>**

```less

@import "~antd/lib/style/themes/default.less";
@import "~antd/dist/antd.less"; // Import Ant Design styles

@primary-color-active:#f0b400;



@primary-color: #ffc107; // primary color for all components
@link-color: #1890ff; // link color
@success-color: #52c41a; // success state color
@warning-color: #faad14; // warning state color
@error-color: #f5222d; // error state color
@font-size-base: 14px; // major text font size
@heading-color: rgba(0, 0, 0, 0.85); // heading text color
@text-color: rgba(0, 0, 0, 0.65); // major text color
@text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
@disabled-color: rgba(0, 0, 0, 0.25); // disable state color
@border-radius-base: 2px; // major border radius
@border-color-base: #d9d9d9; // major border color
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers

```

  
