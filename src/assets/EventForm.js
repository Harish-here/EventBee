 const EventCreateForm = {
    eName : {
        label : "Event Name",
        type : "text",
        mandatory: true
    },
    eDescription : {
        label : "Event Description",
        type : "textarea",
        mandatory: true
    },
    eStartDate: {
        label: "Start Day",
        type: "date",
        mandatory: true
    },
    eEndDate: {
        label: "End Day",
        type: "date",
        mandatory: true
    },
    eTime: {
        label: "Time",
        type: "time",
        mandatory: true
    },
    eFee: {
        label: "Fee",
        type: "number",
        mandatory: true
    },
    eTags: {
        label: "Tags (comma separate)",
        type: "text"
    },
    eMax: {
        label: "Max Participant",
        type: "number"
    },
    eLocation: {
        label: "Location",
        type: "text",
        mandatory: true
    },
};
 const EventDisplay = {
    eName : "",
    eDescription : "",
    eStartDate: "",
    eEndDate: "",
    eTime: "",
    eFee: "",
    eTags: "",
    eMax: "",
    eCustom: "",
    eLocation: ""
  };

export default {
    eCreateForm: EventCreateForm,
    eCreateHolder: EventDisplay
};
