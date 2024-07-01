export const name_validation = {
  name: "userName",
  label: "name",
  type: "text",
  id: "name",
  placeholder: "write your name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};
export const email_validation = {
  name: "email",
  label: "email address",
  type: "email",
  id: "email",
  placeholder: "email",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "not valid",
    },
  },
};
export const password_validation = {
  name: "passWord",
  label: "password",
  type: "password",
  id: "password",
  placeholder: "password",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};
export const num_validation = {
  name: "phoneNumber",
  label: "number",
  type: "number",
  id: "num",
  placeholder: "write a random number",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value: /^(010|011|012|015)\d{8,11}$/,
      message: "not Egyptian Phone Number",
    },
  },
};

export const dentistID_validation = {
  name: "dentistID",
  label: "dentist ID",
  type: "number",
  id: "dentistID",
  placeholder: "write a your dentist ID",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};
