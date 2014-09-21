'use strict'

#  === Full set of specs ===
describe "Virtual keypad module", ->

  #  === vsKeypadLogViewCtrl ===
  describe "vsKeypadLogViewCtrl", ->

    describe "cleanLog", ->
      ctrl  = null
      scope = null

      beforeEach ->
        module 'virtualKeypad'

      beforeEach ->
        inject ($controller)->
          scope = {}
          ctrl  = $controller 'vsKeypadLogViewCtrl', {$scope:scope}

      it "should add parameters to scope", ->
        expect(scope.wsLog).toBeDefined()
        expect(scope.devicePictureStatus).toBe(false)
        expect(scope.vkHelp).toBe(false)
        expect(scope.vkMute).toBe(false)

      it "should able to add & clear log array", ->
        scope.wsLog.systemLog = [{data:"5",type:"key"},{data:"5",type:"key"},{data:"5",type:"key"},{data:"5",type:"key"},{data:"5",type:"key"},{data:"5",type:"key"},{data:"5",type:"key"},{data:"5",type:"key"},{data:"5",type:"key"}]
        expect(scope.wsLog.systemLog.length).toEqual(9)
        scope.cleanLog()
        expect(scope.wsLog.systemLog.length).toEqual(0)

      it "should change disconnect status", ->
        scope.$broadcast = ->
        scope.vkDisconnect = true
        scope.disconnect()
        expect(scope.vkDisconnect).toEqual(false)

      it "should change picture size", ->
        scope.devicePlusButton()
        expect(scope.devicePictureStatus).toEqual(true)


#  === vsKeypadLogViewCtrl ===
  describe "vsKeypadViewCtrl", ->
    ctrl = null
    scope = null
    defaultModel = null

    beforeEach ->
      module 'virtualKeypad'

    beforeEach ->
      inject ($controller)->
        scope = {}
        defaultModel = {keypad:{overlay:false}, wsLog:{systemLog:[]}}
        scope.$on = ->
        scope.$emit = ->
        scope.$broadcast = ->
        $timeout = ->
        ctrl = $controller 'vsKeypadViewCtrl', {$scope:scope, defaultModel:defaultModel}

    it "should change restoring overlay status", ->
      scope.overlayRestoring = true;

      scope.overlayRestoringButtonClick {state : true}
      expect(scope.overlayRestoring).toBeTruthy()
      expect(defaultModel.keypad.overlay).toBeFalsy()

      scope.overlayRestoringButtonClick {state : false}
      expect(scope.overlayRestoring).toBeFalsy()
      expect(defaultModel.keypad.overlay).toBeTruthy()

    it "should toggle button", ->
      item = {state: false}
      scope.toggle_button(item , 10)
      expect(item).toBeTruthy()

    it "should act on overlay button click", ->
      item = {state: false,status:true}
      scope.overlayButtonClick(item)
      expect(item.state).toBeTruthy()

      item = {state: true,status:true}
      scope.overlayButtonClick(item)
      expect(item.state).toBeTruthy()

      item = {state: false,status:false}
      scope.overlayButtonClick(item)
      expect(item.state).toBeFalsy()

    it "should act on keypad button click", ->
      item = {state: false}
      scope.keyClick(item)
      expect(item.state).toBeTruthy()

      item = {state: true}
      scope.keyClick(item)
      expect(item.state).toBeTruthy()
