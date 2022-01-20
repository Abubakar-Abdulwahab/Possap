export const CharacterFormJson = {
  title: "Filters",
  Fields: [
    {
      name: "start_date",
      type: "date",
      title: "Start date",
      required: false,
    },
    {
      name: "end_date",
      type: "date",
      title: "End date",
      required: false,
    },

    {
      name: "status_location",
      type: "select",
      options: [],
      title: "Application By Location",
      required: false,
    },
    {
      name: "location",
      type: "select",
      options: [],
      title: "Application By Location",
      required: false,
    },
    {
      name: "division",
      type: "select",
      options: [],
      title: "Division",
      required: false,
    },
    {
      name: "age",
      type: "select",
      options: [],
      title: "Age",
      required: false,
    },
    {
      name: "Gender",
      type: "select",
      options: [
        {
          label: "male",
          value: "Male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
      title: "Gender",
      required: false,
    },
    {
      name: "country",
      type: "select",
      options: [],
      title: "Destination Country",
      required: false,
    },
    {
      name: "status",
      type: "select",
      options: [],
      title: "Status",
      required: false,
    },
  ],
};
