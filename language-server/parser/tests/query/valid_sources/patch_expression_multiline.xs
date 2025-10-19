query book_club_meeting_registration/{book_club_meeting_registration_id} verb=PATCH {
  input {
    int book_club_meeting_registration_id? filters=min:1
    dblink {
      table = "book_club_meeting_registration"
    }
  }

  stack {
    util.get_input {
      encoding = "json"
    } as $raw_input
  
    db.patch book_club_meeting_registration {
      field_name = "id"
      field_value = $input.book_club_meeting_registration_id
      data = ```
        $input|
            pick:(
                $raw_input|keys
            )
        ```|filter_null|filter_empty_text
    } as $model
  }

  response = $model
}