import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "你好，四建院!",
  description: "HelloBim",
  themeConfig: {    
  
    // https://HelloBIM.github.io
    nav: [
      { text: '基础', link: '/Basic/KeyRevitConcepts' },
      { text: '建筑', link: '/Basic/Architecture/AddBuildingElements' },
      { text: '结构', link: '/Basic/Structural/Modeling' },
      { text: '设备', link: '/Basic/MEP/SetProject' },
      { text: '应用', link: '/Project/' },

    ],
    sidebar: [
      {
        text: ' Revit 基础',
        collapsed: true,
        items: [
          { text: '关键概念 ', link: '/Basic/KeyRevitConcepts' },
          { text: '基本操作', link: '/Basic/ToolsAndFunctions' },
          { text: '软件界面', link: '/Basic/UserInterfaceTour' },
          { text: '软件文件', link: '/Basic/AboutRevit' },
        
        ]
      },

      {
        text: '1. BIM设计基础',
        // collapsed: false,
        items: [

          {
            text: '1.1 通用基础', collapsed: false, items: [

              { text: '1.1.1 创建项目', link: '/Basic/Everyone/CreateModel' },
              { text: '1.1.2 标高轴网', link: '/Basic/Everyone/LevelsAndGrids' },
              { text: '1.1.3 草图', link: '/Basic/Everyone/Sketching' },
              { text: '1.1.4 注释', link: '/Basic/Everyone/Annotation' },
              { text: '1.1.5 视图工作表', link: '/Basic/Everyone/ViewsAndSheets' },

            ]
          },

          {
            text: '1.2 建筑基础', collapsed: false, items: [

              { text: '1.2.1 外围护结构', link: '/Basic/Architecture/AddBuildingElements' },
              { text: '1.2.2 楼梯及房间', link: '/Basic/Architecture/AddInteriorElements' },
              { text: '1.2.3 模型渲染', link: '/Basic/Architecture/PresentTheModel' },
            ]
          },

          {
            text: '1.3 结构基础', collapsed: false, items: [

              { text: '1.3.1 建模', link: '/Basic/Structural/Modeling' },
              { text: '1.3.2 梁柱系统', link: '/Basic/Structural/BeamsAndColumns' },
              { text: '1.3.3 结构建模', link: '/Basic/Structural/MoreStructuralElements' },
              { text: '1.3.4 钢结构连接', link: '/Basic/Structural/SteelConnections' },
              { text: '1.3.5 钢筋建模', link: '/Basic/Structural/Reinforcement' },
            ]
          },

          {
            text: '1.4 设备基础', collapsed: false, items: [

              { text: '1.4.1 项目设置',   link: '/Basic/MEP/SetProject' },
              { text: '1.4.2 建模和分析', link: '/Basic/MEP/ModelingAndAnalysis' },
              { text: '1.4.3 给排水建模', link: '/Basic/MEP/Piping' },
              { text: '1.4.4 暖通建模',   link: '/Basic/MEP/Mechanical' },
              { text: '1.4.5 电气建模',   link: '/Basic/MEP/Electrical' },
            ]
          },

        ]
      },
      {
        text: '2. 建筑专业信息模型',
        collapsed: true,
        items: [
          { text: '2.1 总图建模 ', link: '/Architecture/总图建模' },
          { text: '2.2 建筑建模', link: '/Architecture/建筑模型' },
          { text: '2.3 模型信息', link: '/Architecture/模型信息' },
          { text: '2.4 视图图纸', link: '/Architecture/视图及图纸' },

        ]
      },
      {
        text: '3. 结构专业信息模型',
        collapsed: true,
        items: [
          { text: '3.1 结构模型', link: '/Structural/结构模型' },
          { text: '3.2 模型信息', link: '/Structural/模型信息' },
          { text: '3.3 视图图纸', link: '/Structural/视图图纸' },
        ]
      },
      {
        text: '4. 设备专业信息模型',
        collapsed: true,
        items: [
          { text: '4.1 管道系统', link: '/MEP/管道系统' },
          { text: '4.2 管道附件', link: '/MEP/模型信息' },
          { text: '4.3 模型信息', link: '/MEP/模型信息' },
          { text: '4.4 视图图纸', link: '/MEP/视图图纸' },
        ]
      },
      {
        text: '5. 模型应用',
        collapsed: true,
        items: [
          { text: '5.1 碰撞检查', link: '/Project/碰撞检查' },
          { text: '5.2 工程量统计', link: '/Project/工程量统计' },
          { text: '5.3 BIM出图', link: '/Project/BIM出图' }
        ]
      },
    ]


  }

})
