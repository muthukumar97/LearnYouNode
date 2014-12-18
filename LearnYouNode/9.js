var http = require('http'),bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (i) {
      http.get(process.argv[2 + i], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return (err)
    
          results[i] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

