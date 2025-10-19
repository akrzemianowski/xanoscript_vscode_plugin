query all_util verb=GET {
  input
  stack {
    util.geo_distance {
      latitude_1 = 1
      longitude_1 = 2
      latitude_2 = 3
      longitude_2 = 4
    } as $x1
  
    util.get_all_input as $x2
    util.get_env as $x3
    util.ip_lookup {
      value = ""
      disabled = true
      description = ""
    } as $x6
  
    util.post_process {
      stack
    }
  
    precondition (true == true) {
      error_type = "standard"
      error = ""
    }
  
    util.set_header {
      value = ""
      duplicates = "replace"
    }
  
    util.sleep {
      value = ""
    }
  
    util.get_input {
      encoding = "json"
    } as $x4
  
    util.get_vars as $x5
  }

  response = $x1
}