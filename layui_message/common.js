layui.define([], function(exports) {
    // 我们需要将此方法使用顶层 layui
    // 这样可以确保每个子层都可以使用
    // 我们需要获取顶层 layui 对象
    var MODULE_NAME = 'common'
    var isTop = top === self
    var _layui = isTop ? layui : top.layui
  
    var common= {
         // 事件监听
      $on: function(eventType, callback) {
        return _layui.onevent.call(this, MODULE_NAME, eventType, callback)
      },
  
      // 事件响应
      $emit: function(eventType, params) {
        _layui.event.call(this, MODULE_NAME, eventType, params)
      }
    }
    
    exports(MODULE_NAME, common)
  })