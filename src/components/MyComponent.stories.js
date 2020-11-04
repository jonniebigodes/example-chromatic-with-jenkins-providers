import React from "react";
import  MyComponent  from "./MyComponent";

export default {
  title: "MyComponent",
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const ExampleStory = Template.bind({});

ExampleStory.args = {
  itemOne: "One item",
  itemTwo: "Another item",
};
