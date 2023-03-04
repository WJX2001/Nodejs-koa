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
        statusCode: statusCode,
    }
}

module.exports = {
    success,
    fail
}