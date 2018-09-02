 const EventCreateForm = {
    eName : {
        label : "Event Name",
        type : "text"
    },
    eDescription : {
        label : "Event Description",
        type : "textarea"
    },
    eStartDate: {
        label: "Start Day",
        type: "date"
    },
    eEndDate: {
        label: "End Day",
        type: "date"
    },
    eTime: {
        label: "Time",
        type: "time"
    },
    eFee: {
        label: "Fee",
        type: "number"
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
        type: "text"
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
