angular.module("theme",[]).controller("ThemeController",["$scope",function(t){t.$watch(function(){return t.theme},function(e){parts=e.split(","),t.column_bg=parts[0],t.menu_bg=parts[1],t.active_item=parts[2],t.active_item_text=parts[3],t.hover_item=parts[4],t.text_color=parts[5],t.active_presence=parts[6],t.mention_badge=parts[7]})}]);