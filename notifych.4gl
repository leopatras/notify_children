MAIN
  DEFINE cnt INT
  CALL ui.Interface.loadStyles("notifych")
  OPEN FORM frm FROM arg_val(0)
  DISPLAY FORM frm

  MENU
    ON ACTION run ATTRIBUTE(TEXT = "Run child")
      RUN "fglrun child" WITHOUT WAITING
    ON ACTION notify ATTRIBUTE(TEXT = "Notify children")
      CALL ui.Interface.frontCall(
          "standard", "notifychildren", ["somedata"], [cnt])
      MESSAGE sfmt("notified %1 children",cnt);
    COMMAND "Exit"
      EXIT MENU
  END MENU
END MAIN
