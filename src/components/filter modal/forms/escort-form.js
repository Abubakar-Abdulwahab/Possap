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
      name: "service_category",
      type: "select",
      options: [],
      title: "Service Category",
      required: false,
    },
    {
      name: "category_type",
      type: "select",
      options: [],
      title: "Category Type",
      required: false,
    },

    {
      name: "command",
      type: "select",
      options: [],
      title: "Command",
      required: false,
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Deployed",
          value: "deployed",
        },
        {
          label: "Pending",
          value: "pending",
        },
        {
          label: "Cancelled",
          value: "cancelled",
        },
      ],
      title: "Status",
      required: false,
    },
    {
      name: "state",
      type: "select",
      options: [],
      title: "State",
      required: false,
    },
    {
      name: "local_government",
      type: "select",
      options: [],
      title: "Local Government",
      required: false,
    },
  ],
};
