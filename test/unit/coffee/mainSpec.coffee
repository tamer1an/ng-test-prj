'use strict'

#  === Full set of specs ===
describe "module", ->

  #  === vsKeypadLogViewCtrl ===
  describe "Ctrl", ->

    describe "cleanLog", ->
      ctrl  = null
      scope = null

      beforeEach ->
        module 'adminCRUD'

      beforeEach ->
        inject ($controller)->
          scope = {}
          ctrl  = $controller 'Ctrl', {$scope:scope}
