export const DashboardFormJson = {
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
      name: "command",
      type: "select",
      options: [],
      title: "Command",
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
      name: "command_level",
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
  ],
};
