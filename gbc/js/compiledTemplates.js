/// FOURJS_START_COPYRIGHT(D,2014)
/// Property of Four Js*
/// (c) Copyright Four Js 2014, 2024. All Rights Reserved.
/// * Trademark of Four Js Development Tools Europe Ltd
///   in the United States and elsewhere
///
/// This file can be modified by licensees according to the
/// product manual.
/// FOURJS_END_COPYRIGHT
var gbcTemplates = {};

gbcTemplates["LeafLayoutMeasureElement"] = "<span class=\"gbc_dataContentMeasure\" aria-hidden></span>";

gbcTemplates["MenuWidget"] = "<div role=\"menu\">\n" +
   "  <div class=\"gbc_MenuWidgetTitle\">\n" +
   "    <div class=\"gbc_MenuWidgetText\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_MenuWidgetScrollContainer\">\n" +
   "    <div class=\"containerElement\"></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["StartMenuCommandWidget"] = "<div class=\"mt-as-link\" role=\"menuitem\">\n" +
   "  <span class=\"gbc_startMenuCommandText\"></span>\n" +
   "</div>";

gbcTemplates["StartMenuGroupWidget"] = "<div>\n" +
   "  <div class=\"gbc_startMenuGroupTitle mt-as-link\">\n" +
   "    <div class=\"gbc_startMenuGroupTitleText\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["StartMenuSeparatorWidget"] = "<div class=\"divider\" role=\"separator\"></div>";

gbcTemplates["StartMenuWidget"] = "<div role=\"menu\">\n" +
   "  <div class=\"panel\">\n" +
   "    <div class=\"gbc_StartMenuText\"></div>\n" +
   "    <div class=\"wrapper\">\n" +
   "      <div class=\"containerElement\"></div>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "  <div class=\"resizer\">\n" +
   "    <div class=\"firefox_placekeeper\">.</div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["ToolBarItemWidget"] = "<div class=\"mt-item\" role=\"menuitem\">\n" +
   "  <div class=\"gbc_imageContainer\"></div>\n" +
   "  <span></span>\n" +
   "</div>";

gbcTemplates["ToolBarPlaceholderWidget"] = "<div class=\"mt-item\" role=\"menuitem\">\n" +
   "</div>";

gbcTemplates["ToolBarSeparatorWidget"] = "<div class=\"mt-separator\" role=\"separator\">\n" +
   "  <div class=\"mt-line-v\"></div>\n" +
   "</div>";

gbcTemplates["ToolBarWidget"] = "<div class=\"mt-tab-titles-bar\" role=\"toolbar\" aria-orientation=\"horizontal\">\n" +
   "  <div class=\"mt-tab-titles\">\n" +
   "    <div class=\"mt-tab-titles-container containerElement\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"mt-tab-flow\"></div>\n" +
   "</div>";

gbcTemplates["TopMenuCommandWidget"] = "<div role=\"menuitem\">\n" +
   "  <span class=\"anchor\"></span>\n" +
   "  <span class=\"gbc-label-comment-container\"></span>\n" +
   "</div>";

gbcTemplates["TopMenuGroupWidget"] = "<div class=\"containerElement\">\n" +
   "  <span class=\"topMenuGroupText\"></span>\n" +
   "  <span class=\"topMenuGroupCaret\"></span>\n" +
   "</div>";

gbcTemplates["TopMenuPlaceholderWidget"] = "<div role=\"menuplaceholder\" class=\"containerElement\">\n" +
   "</div>";

gbcTemplates["TopMenuSeparatorWidget"] = "<div class=\"divider\" role=\"separator\" aria-orientation=\"horizontal\"></div>";

gbcTemplates["TopMenuWidget"] = "<ul class=\"containerElement\" role=\"menu\"></ul>";

gbcTemplates["ApplicationWidget"] = "<div class=\"g_measuring\" tabindex=\"0\">\n" +
   "  <div class=\"loading-bar\"></div>\n" +
   "  <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["SessionEndRedirectWidget"] = "<div data-i18n=\"gwc.app.ending.redirect\">Your session has ended. You will be automatically redirected in a few seconds.</div>";

gbcTemplates["SessionEndWidget"] = "<div>\n" +
   "  <div class=\"chromeBarContainer\"></div>\n" +
   "  <div class=\"mt-card\">\n" +
   "    <div class=\"mt-card-richhead\">\n" +
   "          <span class=\"mt-card-header-text\">\n" +
   "          </span>\n" +
   "      <span class=\"mt-card-header-rightpic\"><i class=\"zmdi zmdi-close-circle\"></i></span>\n" +
   "    </div>\n" +
   "    <div class=\"mt-card-body\">\n" +
   "      <div class=\"message hidden\"></div>\n" +
   "      <p class=\"session hidden\">\n" +
   "        <span class=\"sessionTitle\" data-i18n=\"gwc.app.ending.session\">Session ID</span> :\n" +
   "        <span class=\"sessionID\"></span>\n" +
   "      </p>\n" +
   "      <ul class=\"mt-actions\">\n" +
   "        <li class=\"mt-action vmLink from-session hidden\">\n" +
   "          <a target=\"_blank\" rel=\"noopener\" title=\"Virtual Machine log\">\n" +
   "            <i class=\"zmdi zmdi-file-document\"></i> <span data-i18n=\"gwc.app.logs.vm\">Get the VM Log</span>\n" +
   "          </a>\n" +
   "        </li>\n" +
   "        <li class=\"mt-action uaLink from-session hidden\">\n" +
   "          <a target=\"_blank\" rel=\"noopener\" title=\"Proxy log\">\n" +
   "            <i class=\"zmdi zmdi-file-document\"></i> <span data-i18n=\"gwc.app.logs.proxy\">Get the Proxy Log</span>\n" +
   "          </a>\n" +
   "        </li>\n" +
   "        <li class=\"mt-action auiLink mt-as-link from-session_ hidden\">\n" +
   "          <a title=\"Aui log\" rel=\"noopener\">\n" +
   "            <i class=\"zmdi zmdi-file-document\"></i> <span>Get the AUI log</span>\n" +
   "          </a>\n" +
   "        </li>\n" +
   "        <li class=\"mt-action gbcLogLink hidden\">\n" +
   "          <a target=\"_blank\" rel=\"noopener\" title=\"GBC log\">\n" +
   "            <i class=\"zmdi zmdi-file-document\"></i> <span data-i18n=\"gwc.app.logs.gbc\">Get the GBC Log</span>\n" +
   "          </a>\n" +
   "        </li>\n" +
   "        <li class=\"mt-action restartApp from-ua hidden\">\n" +
   "          <a title=\"Restart the app\" rel=\"noopener\">\n" +
   "            <i class=\"zmdi zmdi-repeat\"></i> <span data-i18n=\"gwc.app.restart\">Restart the same application</span>\n" +
   "          </a>\n" +
   "        </li>\n" +
   "      </ul>\n" +
   "    </div>\n" +
   "    <div class=\"mt-card-actions\">\n" +
   "      <button type=\"button\" class=\"mt-button mt-button-flat closeApplicationEnd\" aria-label=\"Close\">\n" +
   "        <span aria-hidden=\"true\" data-i18n=\"gwc.app.close\">CLOSE</span>\n" +
   "      </button>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["SessionLogPromptWidget"] = "<div>\n" +
   "  <div data-i18n=\"gwc.session.logprompt.logneeded\"></div>\n" +
   "  <button type=\"button\" class=\"mt-button\" aria-label=\"Log\">\n" +
   "    <span aria-hidden=\"true\" data-i18n=\"gwc.session.logprompt.relog\">login</span>\n" +
   "  </button>\n" +
   "</div>";

gbcTemplates["SessionWaitingEndWidget"] = "<div role=\"timer\">\n" +
   "  <div class=\"mt-card\">\n" +
   "    <div class=\"mt-card-richhead\">\n" +
   "          <span class=\"mt-card-header-text\" data-i18n=\"gwc.session.waitingend.title\">\n" +
   "          </span>\n" +
   "      <span class=\"mt-card-header-pic\"><div class=\"gbc-loader\"></div></span>\n" +
   "    </div>\n" +
   "    <div class=\"mt-card-body\">\n" +
   "      <div class=\"message\" data-i18n=\"gwc.session.waitingend.message\"></div>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["SessionWidget"] = "<div role=\"application\">\n" +
   "  <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["WaitingWidget"] = "<div>\n" +
   "  <div class=\"gbc_WaitingWidget_outer_content\" role=\"status\">\n" +
   "    <div class=\"gbc_WaitingWidget_inner_content\">\n" +
   "      <span data-i18n=\"gwc.app.waiting\">Waiting for connection</span>\n" +
   "      <div class=\"gbc_WaitingWidget_bars\"></div>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["ApplicationHostWidget"] = "<div>\n" +
   "  <div class=\"mt-centralcontainer\">\n" +
   "    <div class=\"mt-centralcontainer-content containerElement\">\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["ApplicationInformationWidget"] = "<div class=\"applicationInformation\">\n" +
   "  <label>Current application UA url : <input type=\"text\" readonly=\"readonly\" class=\"applicationUAR\"/></label>\n" +
   "</div>";

gbcTemplates["ChromeBarItemBackButtonWidget"] = "<div>\n" +
   "  <div tabindex=\"0\" class=\"mt-button\" role=\"button\">\n" +
   "    <span class=\"windowBackButton\">\n" +
   "      <i class=\"zmdi zmdi-arrow-left\"></i>\n" +
   "    </span>\n" +
   "    <div class=\"textimage\">\n" +
   "      <span class=\"mt-button-text\"></span>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["ChromeBarItemWidget"] = "<div tabindex=\"0\">\n" +
   "  <div class=\"gbc_imageContainer\"></div>\n" +
   "  <span class=\"text\"></span>\n" +
   "</div>";

gbcTemplates["ChromeBarPlaceholderWidget"] = "<div tabindex=\"0\">\n" +
   "</div>";

gbcTemplates["ChromeBarTitleWidget"] = "<div>\n" +
   "  <div class=\"windowListIcon hidden\"><i class=\"zmdi zmdi-window-maximize\"></i></div>\n" +
   "  <div class=\"windowTitle\"></div>\n" +
   "</div>";

gbcTemplates["ChromeBarWidget"] = "<header class=\"mt-toolbar noselect\">\n" +
   "  <div class=\"mt-sidebar-toggle mt-action mt-as-link\">\n" +
   "    <i class=\"zmdi zmdi-menu zmdi-hc-2x\"></i>\n" +
   "    <i class=\"zmdi zmdi-apps zmdi-hc-2x\"></i>\n" +
   "  </div>\n" +
   "  <div class=\"mt-goto-active-window\"></div>\n" +
   "  <div class=\"mt-toolbar-title mt-toolbar-title-text\">\n" +
   "    <span class=\"currentDisplayedWindow\"></span>\n" +
   "  </div>\n" +
   "  <div class=\"cb-spacer\"></div>\n" +
   "\n" +
   "  <div class=\"containerElement\">  </div>\n" +
   "\n" +
   "  <div class=\"mt-sidebar-action-toggle hidden\">\n" +
   "    <i class=\"zmdi zmdi-dots-vertical zmdi-hc-2x\"></i>\n" +
   "  </div>\n" +
   "</header>";

gbcTemplates["ChromeRightBarWidget"] = "<div>\n" +
   "  <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["LogLevelSelectorWidget"] = "<div>\n" +
   "  <div data-loglevel=\"none\" class=\"none\">none</div>\n" +
   "  <div data-loglevel=\"error\" class=\"error\">error</div>\n" +
   "  <div data-loglevel=\"warn\" class=\"warn\">warn</div>\n" +
   "  <div data-loglevel=\"info\" class=\"info\">info</div>\n" +
   "  <div data-loglevel=\"log\" class=\"log\">log</div>\n" +
   "  <div data-loglevel=\"debug\" class=\"debug\">debug</div>\n" +
   "</div>";

gbcTemplates["LogInfoWidget"] = "<div>\n" +
   "  <div class=\"panel panel-primary loginfo-gbc\">\n" +
   "    <div class=\"panel-heading\">GBC</div>\n" +
   "    <div class=\"panel-body\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"panel panel-primary loginfo-browser\">\n" +
   "    <div class=\"panel-heading\" data-i18n=\"gwc.logPlayer.logInfo.headers.browser\">BROWSER</div>\n" +
   "    <div class=\"panel-body\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"panel panel-primary loginfo-theme\">\n" +
   "    <div class=\"panel-heading\" data-i18n=\"gwc.logPlayer.logInfo.headers.themeVariables\">THEME VARIABLES</div>\n" +
   "    <div class=\"panel-body\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"panel panel-primary loginfo-settings\">\n" +
   "    <div class=\"panel-heading\" data-i18n=\"gwc.logPlayer.logInfo.header.storedSettings\">STORED SETTINGS</div>\n" +
   "    <div class=\"panel-body\"></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["LogPlayerWidget"] = "<div>\n" +
   "  <header class=\"logplayer-topbar\">\n" +
   "    <span class=\"logplayer-cursor hidden\"></span>\n" +
   "    <div class=\"logplayer-item\">\n" +
   "      <span class=\"logfile\" data-i18n=\"gwc.logPlayer.topBar.logFile\">Log File</span>\n" +
   "      <label class=\"logplayer-fileinput mt-button\">\n" +
   "        <div><div data-i18n=\"gwc.file.upload.select\"></div> <i class=\"zmdi zmdi-upload\"></i></div>\n" +
   "        <input type=\"file\" class=\"mt-field\">\n" +
   "      </label>\n" +
   "    </div>\n" +
   "\n" +
   "    <div class=\"logplayer-separator\"></div>\n" +
   "\n" +
   "    <div class=\"logplayer-item\">\n" +
   "      <span data-i18n=\"gwc.logPlayer.topBar.controls\">Controls</span>\n" +
   "      <div>\n" +
   "        <button class=\"logplayer-reset mt-button\" title=\"Reset\"><i class=\"zmdi zmdi-backup-restore\"></i></button>\n" +
   "        <button class=\"logplayer-step mt-button\" title=\"Next step\"><i class=\"zmdi zmdi-debug-step-over\"></i></button>\n" +
   "        <button class=\"logplayer-play mt-button mt-button-green\" title=\"Play\"><i class=\"zmdi zmdi-play\"></i></button>\n" +
   "        <button class=\"logplayer-pause mt-button\" title=\"Pause\"><i class=\"zmdi zmdi-pause\"></i></button>\n" +
   "      </div>\n" +
   "    </div>\n" +
   "    <div class=\"logplayer-item\">\n" +
   "      <span data-i18n=\"gwc.logPlayer.topBar.gotoStep\">Go to Step</span>\n" +
   "      <div>\n" +
   "        <input type=\"number\" class=\"logplayer-forward-count mt-field\" value=\"5\">\n" +
   "        <button class=\"logplayer-forward mt-button\" title=\"Forward\"><i class=\"zmdi zmdi-fast-forward\"></i></button>\n" +
   "      </div>\n" +
   "    </div>\n" +
   "\n" +
   "    <div class=\"logplayer-separator\"></div>\n" +
   "\n" +
   "    <div class=\"logplayer-item\">\n" +
   "      <span class=\"logplayer-stats\"></span>\n" +
   "    </div>\n" +
   "\n" +
   "    <div class=\"logplayer-separator\"></div>\n" +
   "\n" +
   "    <div class=\"logplayer-item\">\n" +
   "      <label><span data-i18n=\"gwc.logPlayer.topBar.delay\">Delay</span>\n" +
   "        <input type=\"number\" class=\"logplayer-delay mt-field\">\n" +
   "      </label>\n" +
   "    </div>\n" +
   "    <div class=\"logplayer-item\">\n" +
   "      <div class=\"logplayer-delayfromlog\"></div>\n" +
   "    </div>\n" +
   "\n" +
   "    <div class=\"logplayer-separator\"></div>\n" +
   "\n" +
   "    <div class=\"logplayer-item\">\n" +
   "      <div class=\"logplayer-showHelpers\"></div>\n" +
   "    </div>\n" +
   "\n" +
   "    <div class=\"logplayer-separator\"></div>\n" +
   "\n" +
   "    <div class=\"logplayer-item\">\n" +
   "      <div class=\"logplayer-userInteraction\"></div>\n" +
   "    </div>\n" +
   "\n" +
   "    <div class=\"logplayer-item\">\n" +
   "      <div class=\"logplayer-keypressed hidden\">\n" +
   "        <div class=\"key key-modifier hidden\">\n" +
   "          <span></span>\n" +
   "        </div>\n" +
   "        <div class=\"key key-letter\">\n" +
   "          <span></span>\n" +
   "        </div>\n" +
   "      </div>\n" +
   "      <div class=\"logplayer-mousepressed hidden\">\n" +
   "        <div class=\"key key-left\">\n" +
   "          <span>❰</span>\n" +
   "        </div>\n" +
   "        <div class=\"key key-wheel\">\n" +
   "          <span></span>\n" +
   "        </div>\n" +
   "        <div class=\"key key-right\">\n" +
   "          <span>❱</span>\n" +
   "        </div>\n" +
   "      </div>\n" +
   "    </div>\n" +
   "  </header>\n" +
   "  \n" +
   "  <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["LogRecorderWidget"] = "<div>\n" +
   "  <span>•</span> <i data-i18n=\"gwc.logPlayer.recordingLog\"></i>...\n" +
   "</div>";

gbcTemplates["LogTypesSelectorWidget"] = "<div>\n" +
   "</div>";

gbcTemplates["MainContainerWidget"] = "<div class=\"containerElement\"></div>";

gbcTemplates["MonitorDebugLayoutInfoWidget"] = "<div>\n" +
   "  <h5 class=\"value_layoutEngineName\"></h5>\n" +
   "  <h6><span class=\"value_invalidated_measure\"></span>|<span class=\"value_invalidated_allocatedspace\"></span></h6>\n" +
   "  <div class=\"aui\">\n" +
   "    <table>\n" +
   "      <caption style=\"display: none\">Grid Layout engine</caption>\n" +
   "      <tr class=\"auititle\">\n" +
   "        <th>grid</th>\n" +
   "        <th></th>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>X</td>\n" +
   "        <td class=\"value_posX\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Y</td>\n" +
   "        <td class=\"value_posY\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Width</td>\n" +
   "        <td class=\"value_gridWidth\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Height</td>\n" +
   "        <td class=\"value_gridHeight\"></td>\n" +
   "      </tr>\n" +
   "      <tr class=\"auititle\">\n" +
   "        <td>preferred</td>\n" +
   "        <td></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>width</td>\n" +
   "        <td class=\"value_width\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>height</td>\n" +
   "        <td class=\"value_height\"></td>\n" +
   "      </tr>\n" +
   "    </table>\n" +
   "  </div>\n" +
   "  <div class=\"measures\">\n" +
   "    <table>\n" +
   "      <caption style=\"display: none\">Layout engine attributes</caption>\n" +
   "      <tr class=\"auititle\">\n" +
   "        <th scope=\"col\"></th>\n" +
   "        <th scope=\"col\">has value</th>\n" +
   "        <th scope=\"col\">width</th>\n" +
   "        <th scope=\"col\">height</th>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Measured</td>\n" +
   "        <td class=\"value_measured_hasSize\"></td>\n" +
   "        <td class=\"value_measured_width\"></td>\n" +
   "        <td class=\"value_measured_height\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Minimal</td>\n" +
   "        <td class=\"value_minimal_hasSize\"></td>\n" +
   "        <td class=\"value_minimal_width\"></td>\n" +
   "        <td class=\"value_minimal_height\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Maximal</td>\n" +
   "        <td class=\"value_maximal_hasSize\"></td>\n" +
   "        <td class=\"value_maximal_width\"></td>\n" +
   "        <td class=\"value_maximal_height\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Available</td>\n" +
   "        <td class=\"value_available_hasSize\"></td>\n" +
   "        <td class=\"value_available_width\"></td>\n" +
   "        <td class=\"value_available_height\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Allocated</td>\n" +
   "        <td class=\"value_allocated_hasSize\"></td>\n" +
   "        <td class=\"value_allocated_width\"></td>\n" +
   "        <td class=\"value_allocated_height\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Preferred</td>\n" +
   "        <td class=\"value_preferred_hasSize\"></td>\n" +
   "        <td class=\"value_preferred_width\"></td>\n" +
   "        <td class=\"value_preferred_height\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Decorating</td>\n" +
   "        <td class=\"value_decorating_hasSize\"></td>\n" +
   "        <td class=\"value_decorating_width\"></td>\n" +
   "        <td class=\"value_decorating_height\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Decorating offset</td>\n" +
   "        <td class=\"value_decoratingoffset_hasSize\"></td>\n" +
   "        <td class=\"value_decoratingoffset_width\"></td>\n" +
   "        <td class=\"value_decoratingoffset_height\"></td>\n" +
   "      </tr>\n" +
   "    </table>\n" +
   "  </div>\n" +
   "  <div class=\"stretch\">\n" +
   "    <table>\n" +
   "      <caption style=\"display: none\">Layout engine misc</caption>\n" +
   "      <tr class=\"auititle\">\n" +
   "        <th scope=\"col\">stretch</th>\n" +
   "        <th scope=\"col\"></th>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>X</td>\n" +
   "        <td class=\"value_stretch_x\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Y</td>\n" +
   "        <td class=\"value_stretch_y\"></td>\n" +
   "      </tr>\n" +
   "      <tr class=\"auititle\">\n" +
   "        <th scope=\"col\">children</th>\n" +
   "        <th scope=\"col\"></th>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>X</td>\n" +
   "        <td class=\"value_stretch_children_x\"></td>\n" +
   "      </tr>\n" +
   "      <tr>\n" +
   "        <td>Y</td>\n" +
   "        <td class=\"value_stretch_children_y\"></td>\n" +
   "      </tr>\n" +
   "    </table>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["MonitorDebugNodeInfoWidget"] = "<div>\n" +
   "  <table>\n" +
   "    <caption style=\"display: none\">Nodes attributes</caption>\n" +
   "    <thead>\n" +
   "    <tr>\n" +
   "      <th scope=\"col\" colspan=\"2\">Property</th>\n" +
   "      <th scope=\"col\">Value</th>\n" +
   "      <th scope=\"col\">Value with '_'</th>\n" +
   "      <th scope=\"col\">Default value</th>\n" +
   "    </tr>\n" +
   "    </thead>\n" +
   "    <tbody></tbody>\n" +
   "  </table>\n" +
   "  <div class=\"extended\"></div>\n" +
   "</div>";

gbcTemplates["MonitorDebugTreeItemWidget"] = "<li>\n" +
   "  <div class=\"description\">\n" +
   "    <span class=\"icon\"></span>\n" +
   "    <span class=\"label\"></span>\n" +
   "    <span class=\"idRef\"></span>\n" +
   "  </div>\n" +
   "  <ul class=\"containerElement\"></ul>\n" +
   "</li>";

gbcTemplates["MonitorDebugTreeWidget"] = "<div>\n" +
   "  <div class=\"part\">\n" +
   "    <div>\n" +
   "      <ul class=\"containerElement\"></ul>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "  <div class=\"part\">\n" +
   "    <div class=\"nodeDebug\"></div>\n" +
   "    <div class=\"layoutInfo\"></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["MonitorWidget"] = "<div class=\"containerElement\">\n" +
   "  <div class=\"headerSettings\">\n" +
   "    <label><input id=\"debugGrid\" type=\"checkbox\"> Enable persistent debug grid</label>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["SettingsWidget"] = "<div class=\"containerElement\">\n" +
   "    <div class=\"genero-info flexible_host_stretch_row\">\n" +
   "        <div class=\"flexible_guest_stretch\">\n" +
   "            <img class=\"logo field_logo\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" alt=\"Genero Logo\"/>\n" +
   "        </div>\n" +
   "        <div class=\"versionInfo flexible_guest_nostretch\">\n" +
   "            <p class=\"flexible_host_stretch_row\">\n" +
   "                <span class=\"label\">Version</span>&nbsp;\n" +
   "                <span class=\"value field_version\"></span>\n" +
   "            </p>\n" +
   "            <p class=\"flexible_host_stretch_row\">\n" +
   "                <small>\n" +
   "                    <span class=\"label\">Build</span>&nbsp;\n" +
   "                    <span class=\"value field_build\"></span>\n" +
   "                </small>\n" +
   "            </p>\n" +
   "            <p class=\"flexible_host_stretch_row\">\n" +
   "                <small><span class=\"value field_tag\"></span></small>\n" +
   "            </p>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "\n" +
   "    <div class=\"settingsTopic\">\n" +
   "        <div class=\"settingTitle\" data-i18n=\"gwc.storedSettings.uiLanguage\">Interface language</div>\n" +
   "        <div class=\"settingContent lngSettings\"></div>\n" +
   "    </div>\n" +
   "    <div class=\"settingsTopic\">\n" +
   "        <div class=\"settingTitle\" data-i18n=\"gwc.storedSettings.theme\">Interface theme</div>\n" +
   "        <div class=\"settingContent themeSettings\"></div>\n" +
   "    </div>\n" +
   "    <div class=\"settingsTopic\">\n" +
   "        <div class=\"settingTitle\" data-i18n=\"gwc.storedSettings.settings\">Stored Settings</div>\n" +
   "        <div class=\"settingContent storedSettings\"></div>\n" +
   "        <div class=\"message hidden\">\n" +
   "            <div class=\"settingTitle\" data-i18n=\"gwc.storedSettings.message\"></div>\n" +
   "            <span data-i18n=\"gwc.storedSettings.messageContent\"></span> : <i>QuotaExceededError</i>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"settingsTopic debugTopic hidden\">\n" +
   "        <div class=\"settingTitle\">Debug & QA</div>\n" +
   "        <div class=\"settingContent\">\n" +
   "            <div class=\"settingSubContent latency\"><span class=\"settingSubTitle\">Latency (ms)</span></div>\n" +
   "            <div class=\"settingSubContent loglevel\"><span class=\"settingSubTitle\">Log level</span></div>\n" +
   "            <div class=\"settingSubContent logtypes\"><span class=\"settingSubTitle\">Log types</span></div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "\n" +
   "    <div class=\"copyright\">\n" +
   "        <small>\n" +
   "            Property of Four Js<sup>*</sup><br>\n" +
   "            &#169; Copyright Four Js<span class=\"copyright_year\"></span>. All Rights Reserved.<br>\n" +
   "            * Trademark of Four Js Development Tools Europe Ltd in the United States and elsewhere\n" +
   "        </small>\n" +
   "    </div>\n" +
   "</div>";

gbcTemplates["ApplicationHostSidebarBackdropWidget"] = "<div class=\"mt-sidebar-backdrop\"></div>";

gbcTemplates["ApplicationHostSidebarWidget"] = "<div class=\"mt-sidebar noselect\">\n" +
   "  <div class=\"mt-sidebar-content\">\n" +
   "    <div class=\"mt-sidebar-title\">\n" +
   "      <div class=\"mt-sidebar-toggle mt-action mt-as-link\">\n" +
   "        <i class=\"zmdi zmdi-menu zmdi-hc-2x\"></i>\n" +
   "      </div>\n" +
   "      <div class=\"mt-sidebar-title-text\" data-i18n=\"gwc.main.sidebar.title\">My Genero applications</div>\n" +
   "    </div>\n" +
   "    <div class=\"mt-content\">\n" +
   "      <div class=\"containerElement\"></div>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "  <div class=\"resizer\">\n" +
   "    <div class=\"firefox_placekeeper\">.</div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["SessionSidebarApplicationItemWidget"] = "<div role=\"menuitem\">\n" +
   "  <div>\n" +
   "    <span class=\"applicationIcon\"></span>\n" +
   "    <span class=\"applicationName\"></span>\n" +
   "  </div>\n" +
   "  <ul class=\"mt-actions containerElement\"></ul>\n" +
   "</div>";

gbcTemplates["SessionSidebarApplicationStackItemWidget"] = "<div role=\"menuitem\">\n" +
   "    <span class=\"applicationStackIcon\"></span>\n" +
   "    <span class=\"applicationStackTitle\"></span>\n" +
   "</div>";

gbcTemplates["SessionSidebarApplicationStackListWidget"] = "<div role=\"menuitem\">\n" +
   "  <ul class=\"mt-actions containerElement\"></ul>\n" +
   "</div>";

gbcTemplates["SessionSidebarWidget"] = "<ul class=\"mt-actions containerElement\" role=\"menu\"></ul>";

gbcTemplates["SessionSidebarWindowItemWidget"] = "<div role=\"menuitem\">\n" +
   "  <span class=\"windowIcon\"></span>\n" +
   "  <a tabindex=\"-1\"><span class=\"windowName\"></span></a>\n" +
   "</div>";

gbcTemplates["ApplicationLauncherWidget"] = "<div>\n" +
   "  <div class=\"mt-card containerElement\">\n" +
   "    <div class=\"mt-card-richhead\">\n" +
   "      <span class=\"mt-card-header-text\" data-i18n=\"gwc.welcome.title\">Welcome to GBC</span>\n" +
   "      <img class=\"logo\" src=\"\" alt=\"Genero Logo\"/>\n" +
   "    </div>\n" +
   "    <div class=\"mt-card-body\">\n" +
   "      <p class=\"session\">\n" +
   "        <span class=\"sessionTitle\" data-i18n=\"gwc.welcome.version\">Version</span> :\n" +
   "        <span class=\"value field_version\"></span>\n" +
   "      </p>\n" +
   "      <p class=\"session\">\n" +
   "        <span class=\"sessionTitle\" data-i18n=\"gwc.welcome.build\">Build</span> :\n" +
   "        <span class=\"value field_build\"></span>\n" +
   "      </p>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["CanvasWidget"] = "<div></div>";

gbcTemplates["AccordionFolderWidget"] = "<div class=\"containerElement\"></div>";

gbcTemplates["BoxWidget"] = "<div><div><div class=\"containerElement\" role=\"group\"></div></div></div>";

gbcTemplates["CompleterWidget"] = "<div class=\"containerElement\"></div>";

gbcTemplates["DropDownWidget"] = "<div class=\"containerElement\" tabindex=\"0\" role=\"listbox\" aria-live=\"assertive\"></div>";

gbcTemplates["FolderWidget"] = "<div class=\"gbc_FolderWidget_titles_top\">\n" +
   "  <div class=\"mt-tabs\">\n" +
   "    <div class=\"mt-tab-titles-bar\">\n" +
   "      <div class=\"mt-tab-previous\"><i class=\"zmdi zmdi-chevron-left\"></i><i class=\"zmdi zmdi-chevron-up\"></i></div>\n" +
   "      <div class=\"mt-tab-titles\" role=\"tablist\">\n" +
   "        <div class=\"mt-tab-titles-container\"></div>\n" +
   "        <div class=\"tab-current-indicator\"></div>\n" +
   "      </div>\n" +
   "      <div class=\"mt-tab-next\"><i class=\"zmdi zmdi-chevron-right\"></i><i class=\"zmdi zmdi-chevron-down\"></i></div>\n" +
   "    </div>\n" +
   "    <div class=\"mt-tab-items\">\n" +
   "      <div class=\"mt-tab-items-container containerElement gbc_dataContentPlaceholder\">\n" +
   "      </div>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["FormWidget"] = "<div>\n" +
   "  <div class=\"containerElement\">\n" +
   "    <div class=\"gbc_FormWidget_scrollkeeper\"></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["GridWidget"] = "<div class=\"containerElement\"></div>";

gbcTemplates["GroupTitleWidget"] = "<div class=\"empty\">\n" +
   "  <span class=\"gbc-label-text-container\"></span>\n" +
   "  <span class=\"group-collapser\"><i class=\"zmdi zmdi-chevron-down zmdi-hc-2x\" title=\"Toggle collapse\"></i></span>\n" +
   "</div>";

gbcTemplates["GroupWidget"] = "<div>\n" +
   "  <div class=\"gbc_GroupWidgetContainer\">\n" +
   "    <div class=\"gbc_GroupWidgetContent\">\n" +
   "      <div class=\"containerElement\"></div>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["HBoxWidget"] = "<div><div><div class=\"containerElement\" role=\"group\"></div></div></div>";

gbcTemplates["ListViewRowWidget"] = "<div class=\"\">\n" +
   " <div class=\"gbc_ListViewRowImage\"></div>\n" +
   " <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["ListViewWidget"] = "<div class=\"nohighlight\">\n" +
   "  <div class=\"gbc_ListViewScrollArea\">\n" +
   "    <div class=\"gbc_ListViewRowsContainer containerElement\"></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["ModalWidget"] = "<div class=\"mt-dialog\" role=\"dialog\">\n" +
   "  <div class=\"mt-dialog-pane mt-card initial\">\n" +
   "    <div class=\"mt-dialog-header\">\n" +
   "      <div class=\"mt-dialog-title\"></div>\n" +
   "      <div class=\"movable_firefox_placekeeper\">.</div>\n" +
   "      <div class=\"mt-dialog-actions\">\n" +
   "          <span class=\"close\">\n" +
   "            <i class=\"zmdi zmdi-close\" title=\"Close window\"></i>\n" +
   "          </span>\n" +
   "      </div>\n" +
   "    </div>\n" +
   "    <div class=\"mt-dialog-content containerElement\"></div>\n" +
   "    <div class=\"mt-dialog-footer\"></div>\n" +
   "    <div\n" +
   "      class=\"mt-dialog-resizer\">\n" +
   "      <div class=\"sizable_firefox_placekeeper\">.</div>\n" +
   "      <i\n" +
   "        class=\"mt-resizer-icon zmdi zmdi-resize-bottom-right\"></i></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["PagedScrollGridWidget"] = "<div>\n" +
   "  <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["PageTitleWidget"] = "<div class=\"mt-tab-title ripple\" role=\"tab\" aria-selected=\"false\">\n" +
   "  <span class=\"mt-tab-title-text\"></span>\n" +
   "  <div class=\"mt-tab-title-actions\"></div>\n" +
   "</div>";

gbcTemplates["PageWidget"] = "<div><div class=\"mt-tab-item containerElement\" role=\"tabpanel\"></div></div>";

gbcTemplates["PaginationWidget"] = "<div>\n" +
   "  <i class=\"zmdi zmdi-chevron-left zmdi-hc-2x\"></i>\n" +
   "  <i class=\"zmdi zmdi-chevron-right zmdi-hc-2x\"></i>\n" +
   "</div>";

gbcTemplates["RTableColumnWidget"] = "<div class=\"containerElement\">\n" +
   "    <span class=\"headerText\" draggable=\"true\"></span>\n" +
   "    <span class=\"resizer\" draggable=\"true\"></span>\n" +
   "</div>";

gbcTemplates["RTableItemWidget"] = "<div class=\"containerElement\"></div>";

gbcTemplates["RTableRowWidget"] = "<div class=\"containerElement\">\n" +
   "    <div class=\"left_spacer\"></div>\n" +
   "</div>";

gbcTemplates["RTableWidget"] = "<div class=\"\">\n" +
   "  <div\n" +
   "    class=\"gbc_TableMenuButton zmdi zmdi-order-bool-ascending-variant\">\n" +
   "  </div>\n" +
   "  <div class=\"gbc_TableHeaderGroup\">\n" +
   "    <div class=\"scroller_x\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_TableDataGroup containerElement\">\n" +
   "    <div class=\"scroller_x\"></div>\n" +
   "    <div class=\"scroller_y\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_TableFooterGroup hidden\">\n" +
   "    <div class=\"scroller_x\"></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["RSidebarApplistWidget"] = "<div>\n" +
   "  <div class=\"containerElement\"></div>\n" +
   "  <div class=\"otherElements\"></div>\n" +
   "</div>";

gbcTemplates["RSidebarTopMenuWidget"] = "<div>\n" +
   "  <header>\n" +
   "    <i class=\"back-button zmdi zmdi-arrow-left unavailable\"></i>\n" +
   "    <div class=\"title\">TopMenu</div>\n" +
   "    <i class=\"close-button zmdi zmdi-close\"></i>\n" +
   "  </header>\n" +
   "  <div class=\"panels\">\n" +
   "    <div class=\"containerElement slide\" data-level=\"0\" data-title=\"Topmenu\" role=\"menu\"></div>\n" +
   "  </div>\n" +
   "\n" +
   "</div>";

gbcTemplates["RSidebarWidget"] = "<div class=\"noselect\">\n" +
   "  <div class=\"content\">\n" +
   "    <div class=\"titleContainer visible\">\n" +
   "      <div class=\"mt-sidebar-toggle mt-action\">\n" +
   "        <i class=\"zmdi zmdi-menu\"></i>\n" +
   "        <i class=\"zmdi zmdi-apps\"></i>\n" +
   "        <span class=\"mt-sidebar-title-text\">Applications</span>\n" +
   "      </div>\n" +
   "    </div>\n" +
   "\n" +
   "    <div class=\"applistContainer\"></div>\n" +
   "    <div class=\"topmenuContainer\"></div>\n" +
   "\n" +
   "    <div class=\"settingsContainer\">\n" +
   "      <i class=\"zmdi zmdi-cog\"></i>\n" +
   "      <span class=\"arrow-expand\">&rsaquo;</span>\n" +
   "    </div>\n" +
   "\n" +
   "   </div>\n" +
   "</div>";

gbcTemplates["RowBoundDecoratorWidget"] = "<div><span class=\"zmdi zmdi-dots-vertical\"></span></div>";

gbcTemplates["ScrollGridWidget"] = "<div>\n" +
   "  <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["SpacerItemWidget"] = "<div role=\"separator\">\n" +
   "</div>";

gbcTemplates["SplitterWidget"] = "<div role=\"separator\">\n" +
   "  <i class=\"zmdi\"></i>\n" +
   "  <div class=\"firefox_placekeeper\">.</div>\n" +
   "</div>";

gbcTemplates["StackGroupWidget"] = "<div role=\"listitem\">\n" +
   "  <div class=\"gbc_GroupWidgetContainer\">\n" +
   "    <div class=\"gbc_GroupWidgetContent\">\n" +
   "      <div class=\"containerElement\"></div>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["StackLabelWidget"] = "<div role=\"listitem\">\n" +
   "</div>";

gbcTemplates["StackWidget"] = "<div class=\"containerElement\" role=\"list\"></div>";

gbcTemplates["StretchableScrollGridLineWidget"] = "<div class=\"nohighlight\">\n" +
   "  <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["StretchableScrollGridWidget"] = "<div>\n" +
   "  <div class=\"containerElement\"></div>\n" +
   "</div>";

gbcTemplates["TabbedApplicationCloseWidget"] = "<div class=\"gbc-disabled\">\n" +
   "  <i class=\"zmdi zmdi-close-circle\"></i>\n" +
   "</div>";

gbcTemplates["TraditionalScreenWidget"] = "<div class=\"containerElement\"></div>";

gbcTemplates["TraditionalWindowContainerWidget"] = "<div></div>";

gbcTemplates["TraditionalWindowWidget"] = "<div></div>";

gbcTemplates["UserInterfaceWidget"] = "<div tabindex=\"0\">\n" +
   "  <div class=\"gbc_barsContainer\">\n" +
   "    <div class=\"gbc_chromeBarContainer\"></div>\n" +
   "    <div class=\"gbc_topMenuContainer\"></div>\n" +
   "    <div class=\"gbc_toolBarContainer\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_contentContainer\">\n" +
   "    <div class=\"gbc_startMenuContainer\"></div>\n" +
   "    <div class=\"containerElement\"></div>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_bottomBarsContainer\">\n" +
   "    <div class=\"gbc_bottomToolBarContainer\"></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["VBoxWidget"] = "<div><div><div class=\"containerElement\" role=\"group\"></div></div></div>";

gbcTemplates["WindowWidget"] = "<form>\n" +
   "    <div class=\"gbc_WindowMainContainer\">\n" +
   "        <div class=\"gbc_WindowTopMenuContainer\"></div>\n" +
   "        <div class=\"gbc_WindowToolBarContainer\"></div>\n" +
   "        <div class=\"gbc_WindowMenuContainerTop\"></div>\n" +
   "        <div class=\"gbc_WindowMenuContainerMiddle\">\n" +
   "            <div class=\"gbc_WindowMenuContainerLeft\"></div>\n" +
   "            <div class=\"gbc_WindowContent\">\n" +
   "                <div class=\"containerElement\"></div>\n" +
   "            </div>\n" +
   "            <div class=\"gbc_WindowMenuContainerRight\"></div>\n" +
   "        </div>\n" +
   "        <div class=\"gbc_WindowMenuContainerBottom\"></div>\n" +
   "        <div class=\"gbc_WindowBottomToolBarContainer\"></div>\n" +
   "    </div>\n" +
   "</form>";

gbcTemplates["DummyEditWidget"] = "<div class=\"mt-field gbc_dataContentPlaceholder\">\n" +
   "  <input type=\"text\" class=\"gbc-label-text-container\"/>\n" +
   "</div>";

gbcTemplates["DummyTextEditWidget"] = "<div class=\"mt-field gbc_dataContentPlaceholder\">\n" +
   "  <textarea></textarea>\n" +
   "</div>";

gbcTemplates["DateEditWidgetBase"] = "<div class=\"mt-field containerElement\" tabindex=\"0\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder\"><input type=\"text\" class=\"gbc-label-text-container\"/></div>\n" +
   "  <i class=\"zmdi zmdi-calendar-blank widget-decoration\" title=\"Open picker\"></i>\n" +
   "</div>";

gbcTemplates["DateTimeEditWidgetBase"] = "<div class=\"mt-field containerElement\" tabindex=\"0\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder\"><input type=\"text\" class=\"gbc-label-text-container\"/></div>\n" +
   "  <i class=\"zmdi zmdi-calendar-clock widget-decoration\" title=\"Open picker\"></i>\n" +
   "</div>";

gbcTemplates["SpinEditWidgetBase"] = "<div class=\"mt-field\" role=\"spinbutton\" aria-valuenow=\"0\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder\">\n" +
   "    <input type=\"text\" step=\"any\" class=\"gbc-label-text-container\"/>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_SpinEditWidget_arrows\">\n" +
   "    <div class=\"up\"><span>▲</span></div>\n" +
   "    <div class=\"down\"><span>▼</span></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["TimeEditWidgetBase"] = "<div class=\"mt-field\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder\">\n" +
   "    <input type=\"text\" class=\"gbc-label-text-container\"/>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_TimeEditWidget_arrows\">\n" +
   "    <div class=\"up\"><span>▲</span></div>\n" +
   "    <div class=\"down\"><span>▼</span></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["ButtonEditWidget"] = "<div></div>";

gbcTemplates["ButtonWidget"] = "<div>\n" +
   "  <div tabindex=\"0\" class=\"mt-button\" role=\"button\">\n" +
   "    <div class=\"textimage\">\n" +
   "      <span class=\"mt-button-text\"></span>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["CheckBoxWidget"] = "<div tabindex=\"0\" class=\"gbc_dataContentPlaceholder\" role=\"checkbox\">\n" +
   "  <div class=\"content\">\n" +
   "    <i class=\"zmdi unchecked\"></i>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["ComboBoxWidget"] = "<div class=\"mt-field containerElement\" tabindex=\"0\" role=\"combobox\">\n" +
   "  <i class=\"zmdi toggle\" title=\"Open list\"></i>\n" +
   "</div>";

gbcTemplates["CommandLinkWidget"] = "<div>\n" +
   "  <div tabindex=\"0\" class=\"mt-button\">\n" +
   "    <div class=\"gbc_ImageContainer\"></div>\n" +
   "    <div class=\"command\">\n" +
   "      <span class=\"text\"></span>\n" +
   "      <span class=\"title\"></span>\n" +
   "    </div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["DateEditWidget"] = "<div class=\"mt-field containerElement\" tabindex=\"0\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder g_measureable\"><input type=\"text\" class=\"gbc-label-text-container\"/></div>\n" +
   "  <i class=\"zmdi zmdi-calendar-blank widget-decoration\" title=\"Open picker\"></i>\n" +
   "</div>";

gbcTemplates["DateTimeEditWidget"] = "<div class=\"mt-field containerElement\" tabindex=\"0\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder g_measureable\"><input type=\"text\" class=\"gbc-label-text-container\"/></div>\n" +
   "  <i class=\"zmdi zmdi-calendar-clock widget-decoration\" title=\"Open picker\"></i>\n" +
   "</div>";

gbcTemplates["EditWidget"] = "<div class=\"mt-field gbc_dataContentPlaceholder\">\n" +
   "  <input type=\"text\" class=\"gbc-label-text-container\" autocomplete=\"new-password\"/>\n" +
   "</div>";

gbcTemplates["HLineWidget"] = "<div role=\"separator\" aria-orientation=\"horizontal\"></div>";

gbcTemplates["ImageWidget"] = "<div tabindex=\"0\"></div>";

gbcTemplates["LabelWidget"] = "<div tabindex=\"0\" class=\"gbc_dataContentPlaceholder mt-label\" role=\"note\">\n" +
   "  <span class=\"gbc-label-text-container\"></span>\n" +
   "</div>";

gbcTemplates["MenuLabelWidget"] = "<div tabindex=\"0\" class=\"gbc_dataContentPlaceholder\">\n" +
   "  <span class=\"gbc-label-image-container\"></span>\n" +
   "  <span class=\"gbc-label-text-container\"></span>\n" +
   "  <span class=\"gbc-label-comment-container\"></span>\n" +
   "</div>";

gbcTemplates["MessageWidget"] = "<div role=\"alert\">\n" +
   "  <div class=\"message-text\"></div>\n" +
   "  <div class=\"close-button\">\n" +
   "    <i class=\"zmdi zmdi-close-circle\" title=\"Close message\"></i>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["DateEditMobileWidget"] = "<div class=\"mt-field containerElement gbc_MobileWidget\" tabindex=\"0\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder g_measureable\"><input type=\"date\" class=\"gbc-label-text-container\"/></div>\n" +
   "  <label>\n" +
   "    <i class=\"zmdi zmdi-calendar-blank widget-decoration\" title=\"Open picker\"></i>\n" +
   "  </label>\n" +
   "</div>";

gbcTemplates["DateTimeEditMobileWidget"] = "<div class=\"mt-field containerElement gbc_MobileWidget\" tabindex=\"0\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder g_measureable\"><input type=\"datetime-local\" step=\"1\" class=\"gbc-label-text-container\"/></div>\n" +
   "  <label>\n" +
   "    <i class=\"zmdi zmdi-calendar-clock widget-decoration\" title=\"Open picker\"></i>\n" +
   "  </label>\n" +
   "</div>";

gbcTemplates["SpinEditMobileWidget"] = "<div class=\"mt-field\" role=\"spinbutton\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder g_measureable\">\n" +
   "    <input type=\"number\" step=\"any\" class=\"gbc-label-text-container\"/>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_SpinEditWidget_arrows\">\n" +
   "    <div class=\"up\"><span>▲</span></div>\n" +
   "    <div class=\"down\"><span>▼</span></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["TimeEditMobileWidget"] = "<div class=\"mt-field  gbc_MobileWidget\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder g_measureable\">\n" +
   "    <input type=\"time\" class=\"gbc-label-text-container\" step=\"1\"/>\n" +
   "  </div>\n" +
   "  <i class=\"zmdi zmdi-clock-outline widget-decoration\" title=\"Open picker\"></i>\n" +
   "\n" +
   "  <label class=\"gbc_TimeEditWidget_arrows hidden\">\n" +
   "    <div class=\"up\"><span>▲</span></div>\n" +
   "    <div class=\"down\"><span>▼</span></div>\n" +
   "  </label>\n" +
   "</div>";

gbcTemplates["ProgressBarWidget"] = "<div tabindex=\"0\" class=\"mt-progress gbc_dataContentPlaceholder\" role=\"progressbar\">\n" +
   "  <div class=\"mt-progress-bar\">\n" +
   "    <div class=\"mt-progress-level\" role=\"progressbar\"></div>\n" +
   "    <div class=\"mt-progress-bar-percentage\"><span>..</span></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["RadioGroupItem"] = "<div class=\"gbc_RadioGroupItem\" tabindex=\"0\" role=\"radio\">\n" +
   "  <i class=\"zmdi unchecked\"></i>\n" +
   "  <span></span>\n" +
   "</div>";

gbcTemplates["RadioGroupWidget"] = "<div role=\"radiogroup\">\n" +
   "</div>";

gbcTemplates["RichTextWidget"] = "<div class=\"gbc_dataContentPlaceholder\">\n" +
   "  <iframe onload=\"\" frameborder='no' src=\"\" allowTransparency=\"true\" title=\"Richtext\"></iframe>\n" +
   "</div>";

gbcTemplates["RipGraphicWidget"] = "<div>\n" +
   "  <div></div>\n" +
   "</div>";

gbcTemplates["SliderWidget"] = "<div class=\"gbc_dataContentPlaceholder\">\n" +
   "  <input type=\"range\" step=\"1\"/>\n" +
   "</div>";

gbcTemplates["SpinEditWidget"] = "<div class=\"mt-field\" role=\"spinbutton\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder g_measureable\">\n" +
   "    <input type=\"text\" step=\"any\" class=\"gbc-label-text-container\"/>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_SpinEditWidget_arrows\">\n" +
   "    <div class=\"up\"><span>▲</span></div>\n" +
   "    <div class=\"down\"><span>▼</span></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["StarRatingWidget"] = "<div class=\"gbc_dataContentPlaceholder\">\n" +
   "  <input type=\"number\" step=\"any\" type=\"hidden\" class=\"gbc_StarRatingInput\" hidden/>\n" +
   "</div>";

gbcTemplates["TextEditWidget"] = "<div class=\"mt-field gbc_dataContentPlaceholder\">\n" +
   "  <textarea></textarea>\n" +
   "</div>";

gbcTemplates["TimeEditWidget"] = "<div class=\"mt-field\">\n" +
   "  <div class=\"gbc_dataContentPlaceholder g_measureable\">\n" +
   "    <input type=\"text\" class=\"gbc-label-text-container\"/>\n" +
   "  </div>\n" +
   "  <div class=\"gbc_TimeEditWidget_arrows widget-decoration\">\n" +
   "    <div class=\"up\"><span>▲</span></div>\n" +
   "    <div class=\"down\"><span>▼</span></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["ToggleCheckBoxWidget"] = "<div tabindex=\"0\" class=\"gbc_dataContentPlaceholder\">\n" +
   "  <div class=\"content\">\n" +
   "    <div class=\"switch\" role=\"switch\">\n" +
   "      <label>\n" +
   "        <input type=\"checkbox\">\n" +
   "        <span class=\"lever\"></span>\n" +
   "      </label>\n" +
   "    </div>\n" +
   "    <div class=\"label\"></div>\n" +
   "  </div>\n" +
   "</div>";

gbcTemplates["FileInputWidget"] = "<div>\n" +
   "  <span data-i18n=\"gwc.file.upload.droporclick\"></span>\n" +
   "  <form enctype=\"multipart/form-data\">\n" +
   "    <input name=\"file\" type=\"file\"/>\n" +
   "  </form>\n" +
   "</div>";

gbcTemplates["WebComponentWidget"] = "<div class=\"gbc_dataContentPlaceholder\">\n" +
   "  <iframe onload=\"\" frameborder='no' src=\"\" allowTransparency=\"true\" title=\"Webcomponent\"></iframe>\n" +
   "</div>";

gbcTemplates["HtmlFilterWidget"] = "<div></div>";

gbcTemplates["FlowDecoratorWidget"] = "<i class=\"zmdi zmdi-dots-vertical\"></i>";

gbcTemplates["ScrollAreaWidget"] = "<div>\n" +
   "  <div class=\"spacer\"></div>\n" +
   "</div>";

gbcTemplates["ScrollBarWidget"] = "<div class=\"containerElement\">\n" +
   "  <div class=\"track\"></div>\n" +
   "  <div class=\"thumb\"></div>\n" +
   "</div>";

gbcTemplates["ScrollWidget"] = "<div>\n" +
   "  <div class=\"spacer\"></div>\n" +
   "</div>";
