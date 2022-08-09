class helper {
  getJson(status, message, data) {
    return {
      "status": status,
      "message": message,
      "data": data,
    };
  }
}

module.exports = new helper();