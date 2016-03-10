'use strict';
/* eslint-disable quotes */

module.exports = [
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "size": 1,
        "defaultValue": "Clay Demo"
      },
      {
        "type": "color",
        "appKey": "BACKGROUND_COLOR",
        "defaultValue": "000055",
        "label": "Background Color"
      },
      {
        "type": "color",
        "appKey": "TEXT_COLOR",
        "defaultValue": "ffffff",
        "label": "Text Color"
      }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save"
  },
  {
    "type": "heading",
    "id": "main-heading",
    "defaultValue": "Clay Examples",
    "size": 1
  },
  {
    "type": "text",
    "defaultValue": "The options below do not actually affect the watchface. " +
                    "They are examples of the components available in Clay."
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "This is a section"
      },
      {
        "type": "input",
        "appKey": "email",
        "defaultValue": "",
        "label": "Input Field",
        "description": "This is a description for the input component. " +
                       "You can add <strong>html</strong> in here too.",
        "attributes": {
          "placeholder": "Placeholder set with attributes"
        }
      },
      {
        "type": "slider",
        "appKey": "slider",
        "defaultValue": 15,
        "label": "Slider",
        description: "This is the description for the slider",
        "min": 10,
        "max": 20,
        "step": 0.25
      },
      {
        "type": "toggle",
        "appKey": "cool_stuff",
        "label": "This is a Toggle",
        "defaultValue": false
      },
      {
        "type": "color",
        "appKey": "colorTest",
        "defaultValue": "FF0000",
        "label": "Standard Color Picker",
        "sunlight": false
      },
      {
        "type": "color",
        "appKey": "sunnyColorTest",
        "defaultValue": "00FF00",
        "label": "Sunny Color Picker",
        "sunlight": true
      },
      {
        type: 'button',
        id: 'testButton',
        primary: false,
        defaultValue: 'Generic Button',
        description: 'This is a generic button. ' +
                     'You can listen for standard events like "click"'
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "More Settings"
      },
      {
        "type": "radiogroup",
        "appKey": "radiogroup-test",
        "label": "Radio Group",
        "options": [
          { "label": "Test thing", "value": "one" },
          { "label": "Another thing", "value": "two" },
          { "label": "Final thing with <em>html</em>", "value": "three" }
        ]
      },
      {
        "type": "checkboxgroup",
        "appKey": "checkboxgroup-test",
        "defaultValue": ["quote' \"test", "two"],
        "label": "Checkbox Group",
        "options": [
          { "label": "First thing", "value": "three" },
          { "label": "Another thing", "value": "two" },
          { "label": "Final thing", "value": "three" }
        ]
      },
      {
        "type": "select",
        "appKey": "flavor",
        "defaultValue": "grape",
        "label": "Select Menu",
        "options": [
          { "label": "", "value": "" },
          { "label": "Berry", "value": "berry" },
          { "label": "This Option is Selected", "value": "grape" },
          { "label": "Banana", "value": "banana" }
        ],
        "attributes": {
          "required": "required"
        }
      }
    ]
  }
];
