function test_query {
  input {
    int page?
    json sort?
    json search?
  }

  stack {
    db.query comment {
      join = {
        user: {
          table: "user", 
          where: $db.comment.user_id == $db.user.id
        }
      }
    
      where = $db.comment.created_at < ("now"|timestamp_add_days:-14)
      additional_where = $input.search
      sort = {"comment.created_at": "desc"}
      override_sort = $input.sort
      eval = {name: $db.user.name}
      return = {
        type    : "list"
        distinct: "no"
        paging  : {page: $input.page, per_page: 10, totals: true, offset: 22}
      }
    
      output = [
        "itemsReceived"
        "curPage"
        "nextPage"
        "prevPage"
        "perPage"
        "itemsTotal"
        "pageTotal"
        "items.id"
        "items.user_id"
        "items.created_at"
        "items.name"
      ]
    
      addon = {
        items.items.items.post: {name: "post", input: {post_id: $output.post_id}}
      }
    } as $return_list
  
    db.query comment {
      join = {
        user: {table: "user", where: $db.comment.user_id == $db.user.id}
      }

      where = $db.comment.created_at < ("now"|timestamp_add_days: -14)
      additional_where = $input.search
      override_sort = $input.sort
      eval = {name: $db.user.name}
      return = {type: "exists"}
      output = [
        "itemsReceived"
        "curPage"
        "nextPage"
        "prevPage"
        "perPage"
        "itemsTotal"
        "pageTotal"
        "items.id"
        "items.user_id"
        "items.content"
        "items.created_at"
        "items.name"
      ]
    
      addon = {
        items.post: {name: "post", input: {post_id: $output.post_id}}
      }
    } as $return_exists
  
    db.query comment {
      join = {
        user: {table: "user", where: $db.comment.user_id == $db.user.id}
      }

      where = $db.comment.created_at < ("now"|timestamp_add_days: -14)
      additional_where = $input.search
      override_sort = $input.sort
      eval = {name: $db.user.name}
      return = {type: "count"}
      output = [
        "itemsReceived"
        "curPage"
        "nextPage"
        "prevPage"
        "perPage"
        "itemsTotal"
        "pageTotal"
        "items.id"
        "items.user_id"
        "items.content"
        "items.created_at"
        "items.name"
      ]
    
      addon = {
        items.post: {name: "post", input: {post_id: $output.post_id}}
      }
    } as $return_count
  
    db.query comment {
      join = {
        user: {table: "user", where: $db.comment.user_id == $db.user.id}
      }

      where = $db.comment.created_at < ("now"|timestamp_add_days:-14)
      additional_where = $input.search
      sort = {comment.post_id: "asc"}
      override_sort = $input.sort
      eval = {name: $db.user.name}
      return = {type: "single"}
      output = [
        "itemsReceived"
        "curPage"
        "nextPage"
        "prevPage"
        "perPage"
        "itemsTotal"
        "pageTotal"
        "items.id"
        "items.user_id"
        "items.content"
        "items.created_at"
        "items.name"
      ]
    
      addon = {
        items.post: {name: "post", input: {post_id: $output.post_id}}
      }
    } as $return_single
  
    db.query comment {
      join = {
        user: {table: "user", where: $db.comment.user_id == $db.user.id}
      }

      where = $db.comment.created_at < ("now"|timestamp_add_days:-14)
      additional_where = $input.search
      sort = {comment.user_id: "asc"}
      override_sort = $input.sort
      eval = {name: $db.user.name}
      return = {
        type    : "stream"
        distinct: "yes"
        paging  : {page: $input.page, per_page: 25}
      }
    
      output = [
        "itemsReceived"
        "curPage"
        "nextPage"
        "prevPage"
        "perPage"
        "itemsTotal"
        "pageTotal"
        "items.id"
        "items.user_id"
        "items.content"
        "items.created_at"
        "items.name"
      ]
    
      addon = {
        items.post: {name: "post", input: {post_id: $output.post_id}}
      }
    } as $return_stream
  
    db.query comment {
      join = {
        user: {table: "user", where: $db.comment.user_id == $db.user.id}
      }

      where = $db.comment.created_at < ("now"|timestamp_add_days:-14)
      additional_where = $input.search
      sort = {count_name: "asc"}
      override_sort = $input.sort
      eval = {name: $db.user.name}
      return = {
        type  : "aggregate"
        paging: {page: $input.page, per_page: 25}
        group : {comment_content1: $db.comment.content}
        eval  : {count_name: $db.name|count}
      }
    
      addon = {
        items.post: {name: "post", input: {post_id: $output.post_id}}
      }
    } as $return_aggregate
  
    db.query user {
      where = $db.user.id @> $db.user.name
      return = {type: "list"}
      addon = {
        _post: {
          name : "post"
          input: {post_id: "post"}
          addon: {
            _post: {name: "comment_of_post", input: {post_id: $output.id}}
          }
        }
      }
    } as $user
  }

  response = $return_list
}