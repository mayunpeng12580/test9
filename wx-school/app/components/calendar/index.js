// components/calendar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todos: {
      type: Object,
      value: []
    },
    select: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: 0,
    today: [0, 0, 0],
    days: [],
    todoList: [],
    selected: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //  根据年月计算日历应该显示的日期
    getMonthDay: function(y, m) {
      var arr = [];
      var is_leap = 0;
      if (y % 100 == 0) {
        if (y % 400 == 0) {
          is_leap = 1;
        }
      } else {
        if (y % 4 == 0) {
          is_leap = 1;
        }
      }
      // 每一个月该有的天数
      var month_count = [31, 28 + is_leap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      // 当前月1号星期几
      var first_day = new Date(y + "-" + (m + 1) + "-1").getDay();

      // 上一个月的天数
      var prev_month_day_count = first_day == 0 ? 7 : first_day;
      // 上一个月的日期
      var month = (m - 1 + 12) % 12;
      var year = m == 0 ? (y - 1) : y;

      for (var i = 1; i <= prev_month_day_count; i++) {
        var day = month_count[month] - prev_month_day_count + i;
        var select = this.data.selected.indexOf(year + "-" + (month + 1) + "-" + day) > -1 ? true : false;
        arr.push({
          year: year,
          month: month,
          day: day,
          current: false,
          select: select,
          todo: false,
          list: []
        });
      }

      // 当前月的天数
      var current_month_day_count = month_count[m];

      // 当前月的日期
      for (var i = 1; i <= current_month_day_count; i++) {
        var select = this.data.selected.indexOf(y + "-" + (m + 1) + "-" + i) > -1 ? true : false;
        arr.push({
          year: y,
          month: m,
          day: i,
          current: true,
          select: select,
          todo: false,
          list: []
        });
      }
      // 下一个月的天数
      var next_month_day_count = 42 - prev_month_day_count - current_month_day_count;
      var month = (m + 1) % 12;
      var year = m == 11 ? (y + 1) : y;
      // 下一个月的日期
      for (var i = 1; i <= next_month_day_count; i++) {
        var select = this.data.selected.indexOf(year + "-" + (month + 1) + "-" + i) > -1 ? true : false;
        arr.push({
          year: year,
          month: month,
          day: i,
          current: false,
          select: select,
          todo: false,
          list: []
        });
      }

      console.log(this.data.todos);

      // 便利todos数组，修改todo的状态
      for (var i = 0; i < this.data.todos.length; i++) {
        var tmp = this.data.todos[i].date.split('-');
        tmp[0] = tmp[0] - 0;
        tmp[1] = tmp[1] - 1;
        tmp[2] = tmp[2] - 0;

        for (var j = 0; j < arr.length; j++) {
          if (arr[j].year == tmp[0] && arr[j].month == tmp[1] && arr[j].day == tmp[2]) {
            arr[j].todo = true;
            arr[j].list = this.data.todos[i].list;
          }
        }
      }
      return arr;
    },
    // 上一个月
    prevMonth() {
      var prevMonth = (this.data.month - 1 + 12) % 12;
      var year = (this.data.month == 0 ? (this.data.year - 1) : this.data.year);
      var arr = this.getMonthDay(this.data.year, prevMonth);
      this.setData({
        year: year,
        month: prevMonth,
        days: arr
      })
    },
    // 下一个月
    nextMonth() {
      var nextvMonth = (this.data.month + 1) % 12;
      var year = this.data.month == 11 ? this.data.year + 1 : this.data.year;
      var arr = this.getMonthDay(year, nextvMonth);
      this.setData({
        year: year,
        month: nextvMonth,
        days: arr
      })
    },
    onSelect: function(e) {
      var index = e.target.dataset.index;
      var arr = this.data.days;
      var list = [];
      var selected = this.data.selected;
      // 如果select==true 的时候可以选中多个日期
      // 如果select==false 的时候查看日程安排，只能选中一天
      if (this.data.select) {
        // 取反操作
        arr[index].select = !arr[index].select;
        if (arr[index].select) {
          selected.push(arr[index].year + "-" + (arr[index].month + 1) + "-" + arr[index].day);
        } else {
          for (var i = 0; i < selected.length; i++) {
            if (selected[i] == arr[index].year + "-" + (arr[index].month + 1) + "-" + arr[index].day) {
              selected.splice(i, 1);
              break;
            }
          }
        }

      } else {
        // 查看日程安排
        for (var i = 0; i < arr.length; i++) {
          arr[i].select = false;
        }
        if (arr[index].todo) {
          list = arr[index].list;
        }
        arr[index].select = true;
        // 选中的日期
        selected = [arr[index].year + "-" + (arr[index].month + 1) + "-" + arr[index].day];
      }
      this.setData({
        days: arr,
        todoList: list,
        selected: selected
      });
      // 将选中的日期传出去
      this.triggerEvent('change', {
        selected: selected
      }, {});
    }
  },
  lifetimes: {
    attached() {
      // 获取今天的年月日
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var arr = this.getMonthDay(year, month);
      // 更新data让显示当前的日历
      this.setData({
        year: year,
        month: month,
        today: [year, month, day],
        days: arr
      });
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})