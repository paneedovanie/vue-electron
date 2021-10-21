module.exports.response = async (fun) => {
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
