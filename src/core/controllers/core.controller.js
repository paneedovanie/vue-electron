module.exports = class {
  constructor() {
    this.service = null;
    this.h = {
      reponse: async (fun) => {
        try {
          return {
            status: "success",
            data: await fun()
          }
        } catch (error) {
          return {
            status: "failed",
            error
          }
        }
      }
    }
  }
};
