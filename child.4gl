IMPORT FGL fgldialog
MAIN
  DEFINE cnt INT
  DISPLAY "Child program being notified" AT 1,1
  MENU
    ON ACTION notificationpushed
      LET cnt=cnt+1
      MESSAGE "notificationpushed:",cnt
    COMMAND "winmessage"
      CALL fgl_winMessage("Hallo","Info","info")
      --coming back from winmessage should trigger notificationpushed if during the winmessage a notifychildren fc was running
    COMMAND "Exit"
      EXIT MENU
  END MENU
END MAIN
     
