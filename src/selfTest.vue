<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="4"></el-col>

      <el-col :span="16">
        <transition name="fade" mode="out-in" appear>
          <div
            v-if="activeForm === '0'"
            style="overflow:hidden;height:70vh;"
          >
            <el-card class="selfTestTitle">
              量表选择 /
              <span class="efont">choose a scale</span>
            </el-card>
            <el-card shadow="always" class="formBrief">
              <div slot="header">
                <span style="font-size:1.6rem;font-weight:bold">自闭症儿童ABC量表</span>
              </div>
              <p>自闭症儿童行为检查量表，有57个描述自闭症儿童的感觉、行为、情绪、语言等方面异常表现的项目，可归纳为5个因子：感觉、交往、躯体运动、语言、生活自理。</p>
              <p>本量表只需10～15分钟便可完成(由病儿父母或与病儿共同生活达两周以上的人评定即可)。本量表在不同年龄、不同性别的结果判定上无差异。</p>
              <br>
              <p style="color:#409eff;font-weight:bold">Tips:如果您想快速评估您的对象是否患有自闭症（特别是家长用户），我们建议您选择此表。</p>
              <el-button type="primary" style="margin-top:1rem;" @click="activeForm = '1'">进入测试</el-button>
            </el-card>
            <el-card shadow="always" class="formBrief">
              <div slot="header">
                <span style="font-size:1.6rem;font-weight:bold">自闭症自测与评估CARS量表</span>
              </div>
              <p>(Child Autism Rating Scale儿童自闭症测评表)</p>
              <p>适用对象为学龄前儿童</p>
              <p>该量表编制于20世纪80年代初，从15个主要方面对孤独症儿童进行评估。</p>
              <p>本量表鉴别力可达百分之百的准确，但需专业人士进行测试,是主要适用于医师或儿童心理测验专职人员的他评量表。</p>
              <br>
              <p style="color:#409eff;font-weight:bold">
                Tips:如果您想详细且专业的评估您的对象，我们建议您选择此表。
                <span style="color:#f56c6c">⛔非专业人士不推荐此表。</span>
              </p>
              <el-button type="primary" style="margin-top:1rem;" @click="activeForm = '2'">进入测试</el-button>
            </el-card>
          </div>
          <el-card v-if="activeForm === '1'" key="card2">
            <div slot="header" class="clearfix">
              <span style="font-size:2rem;line-height:normal">自闭症儿童ABC量表</span>
              <el-button
                style="float: left; "
                icon="el-icon-back"
                size="small"
                circle
                @click="activeForm = '0'"
              ></el-button>
            </div>
            <el-form
              ref="selfTestFormABC"
              :model="selfTestFormABC"
              label-width="65%"
              label-position="left"
              class="selfTestFormABC"
              style="margin:0 50px;"
            >
              <el-form-item label="1. 对声音和语言感到迟钝。" prop="t1">
                <el-radio-group v-model="selfTestFormABC.t1">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="2. 与其他儿童交往感到困难。" prop="t2">
                <el-radio-group v-model="selfTestFormABC.t2">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="3. 厌恶学习。" prop="t3">
                <el-radio-group v-model="selfTestFormABC.t3">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="4. 对各种危险，如玩火、登高、在街上乱跑缺乏应有的认识。" prop="t4">
                <el-radio-group v-model="selfTestFormABC.t4">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="5. 已养成的习惯坚决不改变。" prop="t5">
                <el-radio-group v-model="selfTestFormABC.t5">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="6. 不爱说话，有时宁愿用手势表示意愿也不用语言表达。" prop="t6">
                <el-radio-group v-model="selfTestFormABC.t6">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="7. 常常无缘无故地微笑。" prop="t7">
                <el-radio-group v-model="selfTestFormABC.t7">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="8. 不是像一般的幼儿那样弓着身子睡觉，而是僵硬地伸直腿脚睡。" prop="t8">
                <el-radio-group v-model="selfTestFormABC.t8">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="9. 精力异常充沛，有时可半夜醒来，一直玩到早晨仍不疲倦。" prop="t9">
                <el-radio-group v-model="selfTestFormABC.t9">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="10. 不愿和任何人的目光接触。" prop="t10">
                <el-radio-group v-model="selfTestFormABC.t10">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="11. 对某件事物可能产生特殊的爱好和依恋，抓住不放。" prop="t11">
                <el-radio-group v-model="selfTestFormABC.t11">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="12. 喜欢旋转圆形物体，而且可以长时间做出同样动作。" prop="t12">
                <el-radio-group v-model="selfTestFormABC.t12">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="13. 重复、持续地玩一些单调的游戏，如撕纸、摇铁筒中的石块等。" prop="t13">
                <el-radio-group v-model="selfTestFormABC.t13">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="14. 怪僻孤独，不合群。" prop="t14">
                <el-radio-group v-model="selfTestFormABC.t14">
                  <el-radio label="0">A.无</el-radio>
                  <el-radio label="1">B.轻</el-radio>
                  <el-radio label="2">C.明显</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-button type="primary" @click="submitFormABC">提交并查看结果</el-button>
            </el-form>
          </el-card>
          <el-card v-if="activeForm === '2'" key="card3">
            <div slot="header">
              <span style="font-size:2rem;line-height:normal">自闭症自测与评估CARS量表</span>
              <el-button
                style="float: left; "
                icon="el-icon-back"
                size="small"
                circle
                @click="activeForm = '0'"
              ></el-button>
            </div>
            <el-form
              ref="selfTestFormCARS"
              :model="selfTestFormCARS"
              label-position="top"
              class="selfTestFormCARS"
              style="margin:0 50px;"
            >
              <el-form-item label="第一项：Relating to People:（和他人的交互）" prop="t1">
                <el-radio-group v-model="selfTestFormCARS.t1">
                  <el-radio
                    label="1"
                  >在与他人交互上没有困难或异常的表现。孩子的行为表现和他/她的年龄相当。当被要求做一件事情的时候，可能出现一些羞涩、急躁或者厌烦的情绪，但是没有到反常的程度。</el-radio>
                  <el-radio
                    label="2"
                  >与他人交互有轻微的异常。孩子可能回避与大人眼神交流，躲避大人，或者在被强求进行交互时产生急躁厌烦的情绪，或者过度害羞。不能象正常孩子一样对大人作出响应，或者和大多数同龄孩子相比更加依附父母。</el-radio>
                  <el-radio
                    label="3"
                  >与他人交互上有中度异常。孩子时常会处于超然度外的样子（似乎不意识到大人的存在）。时常需要用持续和强制的努力才能吸引他的注意力。孩子极少发出主动接触。</el-radio>
                  <el-radio
                    label="4"
                  >与他人交互上有重度异常。孩子一直出于超然度外的样子，毫不关心大人在作什么。他几乎从不对大人发出响应或主动发起交互。仅在极度持续的努力下才能吸引孩子的注意力。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第二项： Imitation:（模仿）" prop="t2">
                <el-radio-group v-model="selfTestFormCARS.t2">
                  <el-radio label="1">合适的模仿行为。孩子能够模仿声音，词句和动作，这些行为和他的应有的能力水平相当。</el-radio>
                  <el-radio
                    label="2"
                  >轻度异常的模仿行为。孩子在很多时候能模仿简单的动作（比如拍手）或者简单的语音，偶尔只能在受激励的情况下才能做到，或者时间上有所延迟地做到。</el-radio>
                  <el-radio label="3">中度异常的模仿行为。孩子只能在部分时间里做到模仿，并且需要大人持续大量的帮助才能做到，或者仅在一定的时间延迟后，频繁地模仿。</el-radio>
                  <el-radio label="4">严重异常的模仿行为。即使在激励和帮助下，孩子也极少或者从未模仿过声音、词句或者动作。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第三项：Emotional response:（情绪反应）" prop="t3">
                <el-radio-group v-model="selfTestFormCARS.t3">
                  <el-radio label="1">与年龄相符的或者和情境相符的情绪反应。孩子能够表现出类型和程度都合适的情绪反应，并体现在面部表情、姿态和行为上的变化。</el-radio>
                  <el-radio label="2">轻度异常的情绪反应。孩子偶尔会表现出某种在类型上或程度上不合适的情绪反应。他的反应有时和周围的事和物不相关。</el-radio>
                  <el-radio
                    label="3"
                  >中度异常的情绪反应。孩子明显表现出在类型和（或）程度上不适当的情绪反应。他的反应可能相当内向或者相当外项，并且和情境无关；可能在没有明显能够引发情绪变化的事物存在的情况下做鬼脸、发笑、或者变得呆板。</el-radio>
                  <el-radio
                    label="4"
                  >重度异常的情绪反应。情绪反应很少和情境相符；一旦孩子处于某种情绪下就很难改变情绪。相反地，孩子也可能在周围没有发生任何变化的情况下发生很多不同的情绪变化。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第四项： Body Use:（肢体运用）" prop="t4">
                <el-radio-group v-model="selfTestFormCARS.t4">
                  <el-radio label="1">和年龄相符的肢体运用。孩子活动自如、敏捷、协调，和同龄孩子相当。</el-radio>
                  <el-radio label="2">轻度异常的肢体运用。可能呈现某些轻度的癖好，比如笨拙、重复动作、协调性差，或者较少程度地出现不寻常的动作。</el-radio>
                  <el-radio
                    label="3"
                  >中度异常的肢体运用。表现出和同龄孩子相比明显怪异和不寻常的举动，比如奇怪的手指动作、奇特的手指或肢体姿势、凝视或者戳身体的部位、自伤、摇摆、旋转或者踮起脚尖走路。</el-radio>
                  <el-radio label="4">重度异常的肢体运用。存在严重和频繁的上述异常行为，这些行为即使在受到阻止或者把他置身于其他活动中之后依然持续。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第五项：Object Use:（物体运用）" prop="t5">
                <el-radio-group v-model="selfTestFormCARS.t5">
                  <el-radio label="1">对玩具或其他物体有合适的兴趣和使用方式。孩子对符合他能力水平的玩具和其他物体显示出正常的兴趣，能够用合适的方式玩耍。</el-radio>
                  <el-radio
                    label="2"
                  >对玩具或其他物体存在轻微异常的兴趣和使用方式。孩子可能对某个玩具显示出不同寻常的兴趣，并且用不适当的、幼稚的方式玩耍（比如重重拍打或者吮吸玩具）</el-radio>
                  <el-radio
                    label="3"
                  >对玩具或其他物体存在中度异常的兴趣和使用方式。孩子可能对玩具和其他物体基本不发生兴趣，或者专注于用奇怪的方式进行玩耍。孩子可能专注于玩具某些不显眼的部件，着迷于物体的光影，重复移动物体的某些部件，或者专门玩同一个物体。</el-radio>
                  <el-radio label="4">对玩具或物体存在重度异常的兴趣和使用方式。孩子更加频繁地着迷于上述罗列的行为中，并且难以吸引他的注意力。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第六项：Adaptation to change:（对变化的适应）" prop="t6">
                <el-radio-group v-model="selfTestFormCARS.t6">
                  <el-radio label="1">对变化的反应和年龄相当。孩子会意识到或者评述一些生活规律和习惯的改变，但是能够接受，没有不当的紧张和不适。</el-radio>
                  <el-radio label="2">对变化的反应轻度异常。当大人试图改变要求完成的任务时，孩子继续同样的行为，或者运用同样的材料。</el-radio>
                  <el-radio
                    label="3"
                  >对变化的反应中度异常。孩子对常规的改变明显抗拒，试图继续原有的活动方式，难以引开注意力。孩子因改变他已经建立的常规方式产生愤怒和不快。</el-radio>
                  <el-radio label="4">对变化的反应重度异常。孩子对变化产生严重的反应，当被强加改变时，孩子会变得极度愤怒和不合作，大发脾气。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第七项：Visual response:（视觉反应）" prop="t7">
                <el-radio-group v-model="selfTestFormCARS.t7">
                  <el-radio label="1">视觉行为正常。配合其他感官使用视觉功能，把它作为探索新事物的方式。</el-radio>
                  <el-radio
                    label="2"
                  >视觉行为轻度异常。孩子偶尔需要在有提醒的情况下才能看物体。孩子可能比同龄孩子更有兴趣照镜子或看灯光，可能偶尔凝视天空，或者回避和他人眼神接触。</el-radio>
                  <el-radio
                    label="3"
                  >视觉行为中度异常。孩子必须时常需要人提醒才能转而看他正在做的事情。可能凝视天空或回避他人的眼神，从异常的角度看物体，或者把物体凑近眼睛看。</el-radio>
                  <el-radio label="4">视觉行为重度异常。孩子始终回避看他人或或某些特定的物体，并且已极度严重的形式呈现出上述异常视觉行为。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第八项： Listening Response:（听觉反应）" prop="t8">
                <el-radio-group v-model="selfTestFormCARS.t8">
                  <el-radio label="1">和年龄相符的正常听觉反应。孩子听觉行为正常，并且和其他敢管配合使用。</el-radio>
                  <el-radio
                    label="2"
                  >轻度听觉反应异常。对某些声音可能缺少反应或者轻微地过度反应。对声音的反应可能有延迟，并且需要重复声音才能吸引孩子的注意力。孩子可能会被不相干的声音干扰。</el-radio>
                  <el-radio label="3">中度听觉反应异常。孩子对声音的反应不一而足，时常听不到某个声音刚开始的几声，对于日常生活中的声音，可能感到惊恐或捂住耳朵。</el-radio>
                  <el-radio label="4">重度听觉反应异常。对于任何声音，孩子出现程度严重的过度反应和（或）过低反应。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第九项：Proximal sensory response：（近处感觉反应）" prop="t9">
                <el-radio-group v-model="selfTestFormCARS.t9">
                  <el-radio
                    label="1"
                  >孩子以年龄相仿的适当方式，一般通过感觉和视觉来探知新事物。在合适的时候使用味觉和嗅觉。当遇到轻微的日常伤痛后，孩子表现出不适，但没有过度的反应。</el-radio>
                  <el-radio
                    label="2"
                  >轻度异常。孩子可能坚持要把东西放到口中，可能去闻或者品尝不能实用的东西；可能对轻微的伤痛没有反应或者过度反应（正常孩子只是表达不适）。</el-radio>
                  <el-radio label="3">中度异常。孩子可能中度地沉迷于对物体或人的触摸、嗅或者品尝。孩子可能反应过度或者过少。</el-radio>
                  <el-radio
                    label="4"
                  >重度异常。孩子沉迷于嗅、品尝和触摸物体，更多的是满足于感知，而不是为了正常地探究或者使用物体。孩子可能完全失去痛觉，或者对轻微的不适表现出强烈的反应。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第十项： Fear orr Nervousness:（恐惧或紧张）" prop="t10">
                <el-radio-group v-model="selfTestFormCARS.t10">
                  <el-radio label="1">正常的恐惧或紧张反应。孩子的表现和情境、年龄相符。</el-radio>
                  <el-radio label="2">轻微的异常。相比于同龄孩子处于同样的情境，孩子偶尔表现出过多或过少的恐惧和紧张。</el-radio>
                  <el-radio label="3">中度的异常。相比于小一些或大一些的孩子，处于同样的情境下，孩子表现出相当程度的过多或者过少的恐惧。</el-radio>
                  <el-radio
                    label="4"
                  >重度异常。哪怕反复经历过的无害的事情或物体，孩子都始终表现出恐惧。非常难以安慰使之平静。同龄孩子能够正常躲避的危险，孩子可能相反地表现出无畏。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第十一项： Verbal Communication:（语言交流）" prop="t11">
                <el-radio-group v-model="selfTestFormCARS.t11">
                  <el-radio label="1">正常的语言交流，和年龄相符，和情境相符。</el-radio>
                  <el-radio label="2">轻度异常。语言发展表现出全面的滞后。大多数语言没有意义，存在仿说或者代词反用情况。偶尔出现怪异词句或者没有意义的话。</el-radio>
                  <el-radio
                    label="3"
                  >中度异常。可能没有语言。如果有，语言交流中混杂一些没有意义的交流内容，并存在异常语言，比如无意义的废话、仿说和代词反用。有意义的交流中可能出现过度提问或者专注于某些特定话题等异常现象。</el-radio>
                  <el-radio
                    label="4"
                  >重度异常。不出现有意义的语言。孩子可能发出婴儿般的尖叫、怪异的或者象动物一样的声音、接近于语言的复杂的声音，或者持续怪异地使用一些能够识别的词句或短语。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第十二项： Nonverbal Communication:（非语言交流）" prop="t12">
                <el-radio-group v-model="selfTestFormCARS.t12">
                  <el-radio label="1">正常的非语言交流，符合年龄和情境。</el-radio>
                  <el-radio
                    label="2"
                  >轻度异常。不能熟练使用非语言交流，可能只是指物模糊，或者试图去抓取他想要的东西，而在同样的情形下，同龄的正常孩子可能会更明确地指向或者作出手势来表达他想要这个东西。</el-radio>
                  <el-radio label="3">中度异常。孩子一般不能用非语言的方式来表达要求，并且不能理解他人的非语言交流行为。</el-radio>
                  <el-radio label="4">重度异常。孩子只会用怪异的、或者他特有的、没有明显意义的手势，并且不能理解他人的手势、面部表情所表达的含义。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第十三项： Activity Level:（活动量）" prop="t13">
                <el-radio-group v-model="selfTestFormCARS.t13">
                  <el-radio label="1">正常活动量，和年龄、情境相仿。和同龄孩子处于同样情境相比，不表现过多或过少的活动量。</el-radio>
                  <el-radio label="2">轻度异常。孩子时常表现出轻度的不安分或者一定程度的“懒散”并且行动缓慢。孩子的活动量对他的表现产生轻微的妨碍。</el-radio>
                  <el-radio
                    label="3"
                  >中度异常。孩子可能相当活跃，难以约束。可能有无穷的精力，晚上可能不能平静入睡。相反，孩子可能的相当的沉闷，需要极大的激励才能使他活动。</el-radio>
                  <el-radio label="4">重度异常。孩子表现出极端的活跃或者不活跃，并且可能在两个极端间转换。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第十四项： Intelligence function：（智力功能）" prop="t14">
                <el-radio-group v-model="selfTestFormCARS.t14">
                  <el-radio label="1">智力正常，在各个方面比较均衡。孩子具有和同龄孩子一样的智力水平，没有任何不寻常的智力技巧或困难。</el-radio>
                  <el-radio label="2">轻度异常。孩子和同龄孩子相比不那么聪明，各项能力还算均衡。</el-radio>
                  <el-radio label="3">中度异常。孩子总体上不如同龄孩子聪明，但是孩子可能在某个或几个方面接近正常。</el-radio>
                  <el-radio label="4">重度异常。虽然在总体上不如同龄孩子聪明，但是在某个或某些方面甚至比同龄孩子优秀。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="第十五项： General Impressions:（总体印象）" prop="t15">
                <el-radio-group v-model="selfTestFormCARS.t15">
                  <el-radio label="1">没有自闭症：孩子没有表现出一项自闭症的症状。</el-radio>
                  <el-radio label="2">轻度自闭症：孩子只表现出少数几个症状，或者只表现出轻度自闭。</el-radio>
                  <el-radio label="3">中度自闭症：孩子表现出不少自闭症状，或者表现出中度自闭。</el-radio>
                  <el-radio label="4">重度自闭症：孩子表现出许多自闭症状，或者表现出重度自闭。</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-button type="primary" @click="submitFormCARS">提交并查看结果</el-button>
            </el-form>
          </el-card>
          <el-card v-if="activeForm === '3'" style="width:50%;margin-left:25%;margin-bottom:47vh">
            <div v-if="loading" style="padding:6rem 4rem;">
              <i style="font-size:4rem;color:#909399;" class="el-icon-loading"></i>
              <p style="font-size:2.4rem;margin-top:2rem;">分析中，请稍后</p>
            </div>
            <div v-if="!loading" style="padding:4rem 4rem;">
              <p style="font-size:1.8rem;line-height:2.4rem">本次得分：{{score}}</p>
              <p style="font-size:1.8rem;line-height:2.4rem;margin:2rem 0;">诊断结果:<span v-if="score<14">被测者<span style="font-weight:bold;color: #409eff;">没有</span>孤独症倾向</span><span v-else>被测者<span style="font-weight:bold;color: #F56C6C;">有</span>孤独症倾向，建议到机构做进一步的检查。</span></p>
              <el-button type="primary" plain @click="activeForm = '0'">返回</el-button>
            </div>
          </el-card>
          <el-card v-if="activeForm === '4'" style="width:50%;margin-left:25%;margin-bottom:47vh">
            <div v-if="loading" style="padding:6rem 4rem;">
              <i style="font-size:4rem;color:#909399;" class="el-icon-loading"></i>
              <p style="font-size:2.4rem;margin-top:2rem;">分析中，请稍后</p>
            </div>
            <div v-if="!loading" style="padding:4rem 4rem;">
              <p style="font-size:1.8rem;line-height:2.4rem">本次得分：{{score}}</p>
              <p style="font-size:1.8rem;line-height:2.4rem;margin:2rem 0;">诊断结果:<span v-if="score<30">被测者<span style="font-weight:bold;color: #409eff;">没有</span>孤独症倾向</span><span v-else-if="score<=36 && score>=30">被测者<span style="font-weight:bold;color: #F56C6C;">有轻微或中度</span>孤独症倾向，请到机构做进一步的康复检查。</span><span v-else>被测者<span style="font-weight:bold;color: #F56C6C;">有重度孤独症</span>，建议立马到相关机构进行专业治疗。</span></p>
              <el-button type="primary" plain @click="activeForm = '0'">返回</el-button>
            </div>
          </el-card>
        </transition>
      </el-col>

      <el-col :span="4">
        <transition name="fade" mode="out-in" appear>
        <el-card v-if="activeForm === '1'" class="tipCard" key="card4">
          使用须知：<br>
          <span>不要纠结</span>于部分选项，本表只分析受测人的大致性格倾向。若自测结果不理想，建议您最好带孩子到<span>专业机构</span>做进一步检测。
        </el-card>
        <el-card v-if="activeForm === '2'" class="tipCard" key="card5">
          使用须知：<br>
          本表主要适用于<span>医师或儿童心理测验专职人员</span>。每题有四个选项，第一个选项为正常孩子的表现。应用时最好能结合<span>儿童孤独症家长评定量表</span>共同使用。
        </el-card>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfTestFormABC: {},
      selfTestFormCARS: {},
      activeForm: '0',
      loading: false,
      score: null
    }
  },
  methods: {
    submitFormABC() {
      // debugger
      if (Object.getOwnPropertyNames(this.selfTestFormABC).length < 15) {
        this.$message({
          message: '您有题目遗漏，请全部完成再提交',
          type: 'warning'
        })
        return
      } else {
        this.activeForm = '3'
        this.score = 0
        for (const i in this.selfTestFormABC) {
          this.score += parseInt(this.selfTestFormABC[i])
        }
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 3000)
        this.$refs.selfTestFormABC.resetFields()
        // console.log(this.$refs.selfTestFormABC)
      }
    },
    submitFormCARS() {
      // debugger
      if (Object.getOwnPropertyNames(this.selfTestFormCARS).length < 16) {
        this.$message({
          message: '您有题目遗漏，请全部完成再提交',
          type: 'warning'
        })
        return
      } else {
        this.activeForm = '4'
        this.score = 0
        for (const i in this.selfTestFormCARS) {
          this.score += parseInt(this.selfTestFormCARS[i])
        }
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 3000)
        this.$refs.selfTestFormCARS.resetFields()
        // console.log(this.$refs.selfTestFormCARS)
      }
    }
  }
}
</script>

<style scoped>
.selfTestTitle {
  font-size: 1.8rem;
  line-height: 4rem;
  margin: 3vh 4.5%;
}
.formBrief {
  width: 40%;
  float: left;
  margin: 0 4.5%;
  margin-top: 5vh;
}
.formBrief p {
  text-align: left;
  font-size: 1.4rem;
  line-height: 2rem;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.tipCard{
  width: 10vw;
  position: fixed;
  right: 4vw;
  top: 10rem;
  z-index: 10;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: left;
}
.tipCard span{
  font-weight: bold;
  color: #409eff;
}
</style>
