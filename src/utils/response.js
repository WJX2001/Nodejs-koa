function success(data) {
    return {
        success: true,
        data,
        statusCode: 0
    }
}

function fail(msg,statusCode) {
    return {
        success:false,
        msg,
        statusCode: -1,
    }
}

module.exports = {
    success,
    fail
}