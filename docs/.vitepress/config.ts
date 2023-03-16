import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "你好，四建院!",
  description: "HelloBim",
  themeConfig: {    

    // https://HelloBIM.github.io
    nav: [
      { text: '基础', link: 'https://HelloBIM.github.io/Basic/KeyRevitConcepts' },
      { text: '建筑', link: 'https://HelloBIM.github.io/Basic/Architecture/AddBuildingElements' },
      { text: '结构', link: 'https://HelloBIM.github.io/Basic/Structural/Modeling' },
      { text: '设备', link: 'https://HelloBIM.github.io/Basic/MEP/SetProject' },
      { text: '应用', link: 'https://HelloBIM.github.io/Project/' },

    ],
    sidebar: [
      {
        text: ' Revit 基础',
        collapsed: true,
        items: [
          { text: '关键概念 ', link: 'https://HelloBIM.github.io/Basic/KeyRevitConcepts' },
          { text: '基本操作', link: 'https://HelloBIM.github.io/Basic/ToolsAndFunctions' },
          { text: '软件界面', link: 'https://HelloBIM.github.io/Basic/UserInterfaceTour' },
          { text: '软件文件', link: 'https://HelloBIM.github.io/Basic/AboutRevit' },
        
        ]
      },

      {
        text: '1. BIM设计基础',
        // collapsed: false,
        items: [
          config.ts
          {
            text: '1.1 通用基础', collapsed: false, items: [

              { text: '1.1.1 创建项目', link: 'https://HelloBIM.github.io/Basic/Everyone/CreateModel' },
              { text: '1.1.2 标高轴网', link: 'https://HelloBIM.github.io/Basic/Everyone/LevelsAndGrids' },
              { text: '1.1.3 草图', link: 'https://HelloBIM.github.io/Basic/Everyone/Sketching' },
              { text: '1.1.4 注释', link: 'https://HelloBIM.github.io/Basic/Everyone/Annotation' },
              { text: '1.1.5 视图工作表', link: 'https://HelloBIM.github.io/Basic/Everyone/ViewsAndSheets' },

            ]
          },

          {
            text: '1.2 建筑基础', collapsed: false, items: [

              { text: '1.2.1 外围护结构', link: 'https://HelloBIM.github.io/Basic/Architecture/AddBuildingElements' },
              { text: '1.2.2 楼梯及房间', link: 'https://HelloBIM.github.io/Basic/Architecture/AddInteriorElements' },
              { text: '1.2.3 模型渲染', link: 'https://HelloBIM.github.io/Basic/Architecture/PresentTheModel' },
            ]
          },

          {
            text: '1.3 结构基础', collapsed: false, items: [

              { text: '1.3.1 建模', link: 'https://HelloBIM.github.io/Basic/Structural/Modeling' },
              { text: '1.3.2 梁柱系统', link: 'https://HelloBIM.github.io/Basic/Structural/BeamsAndColumns' },
              { text: '1.3.3 结构建模', link: 'https://HelloBIM.github.io/Basic/Structural/MoreStructuralElements' },
              { text: '1.3.4 钢结构连接', link: 'https://HelloBIM.github.io/Basic/Structural/SteelConnections' },
              { text: '1.3.5 钢筋建模', link: 'https://HelloBIM.github.io/Basic/Structural/Reinforcement' },
            ]
          },

          {
            text: '1.4 设备基础', collapsed: false, items: [

              { text: '1.4.1 项目设置',   link: 'https://HelloBIM.github.io/Basic/MEP/SetProject' },
              { text: '1.4.2 建模和分析', link: 'https://HelloBIM.github.io/Basic/MEP/ModelingAndAnalysis' },
              { text: '1.4.3 给排水建模', link: 'https://HelloBIM.github.io/Basic/MEP/Piping' },
              { text: '1.4.4 暖通建模',   link: 'https://HelloBIM.github.io/Basic/MEP/Mechanical' },
              { text: '1.4.5 电气建模',   link: 'https://HelloBIM.github.io/Basic/MEP/Electrical' },
            ]
          },

        ]
      },
      {
        text: '2. 建筑专业信息模型',
        collapsed: true,
        items: [
          { text: '2.1 总图建模 ', link: 'https://HelloBIM.github.io/Architecture/总图建模' },
          { text: '2.2 建筑建模', link: 'https://HelloBIM.github.io/Architecture/建筑模型' },
          { text: '2.3 模型信息', link: 'https://HelloBIM.github.io/Architecture/模型信息' },
          { text: '2.4 视图图纸', link: 'https://HelloBIM.github.io/Architecture/视图及图纸' },

        ]
      },
      {
        text: '3. 结构专业信息模型',
        collapsed: true,
        items: [
          { text: '3.1 结构模型', link: 'https://HelloBIM.github.io/Structural/结构模型' },
          { text: '3.2 模型信息', link: 'https://HelloBIM.github.io/Structural/模型信息' },
          { text: '3.3 视图图纸', link: 'https://HelloBIM.github.io/Structural/视图图纸' },
        ]
      },
      {
        text: '4. 设备专业信息模型',
        collapsed: true,
        items: [
          { text: '4.1 管道系统', link: 'https://HelloBIM.github.io/MEP/管道系统' },
          { text: '4.2 管道附件', link: 'https://HelloBIM.github.io/MEP/模型信息' },
          { text: '4.3 模型信息', link: 'https://HelloBIM.github.io/MEP/模型信息' },
          { text: '4.4 视图图纸', link: 'https://HelloBIM.github.io/MEP/视图图纸' },
        ]
      },
      {
        text: '5. 模型应用',
        collapsed: true,
        items: [
          { text: '5.1 碰撞检查', link: 'https://HelloBIM.github.io/Project/碰撞检查' },
          { text: '5.2 工程量统计', link: 'https://HelloBIM.github.io/Project/工程量统计' },
          { text: '5.3 BIM出图', link: 'https://HelloBIM.github.io/Project/BIM出图' }
        ]
      },
    ]
  }
})
