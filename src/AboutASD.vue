<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <div class="crumb">
          <span>首页</span> > <span>什么是自闭症谱系障碍</span>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <el-row type="flex" justify="space-between" align="middle" style="margin-top:1rem">
      <el-col :span="1"></el-col>
      <el-col :span="22">
        <img src="../static/images/aboutASD.jpg" width="70%">
      </el-col>
      <el-col :span="1"></el-col>
    </el-row>
    <section style="margin-top:1rem">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="2"></el-col>
        <el-col :span="20">
          <el-card :body-style="{ padding: '2rem 4rem'}" style="border-radius:1rem;height:100%">
            <h1 class="title boldfont">自闭症谱系障碍简介</h1>
            <pre class="description">{{description}}</pre>
            <h1 class="title boldfont" style="color:#67C23A">尽早发现病症可以改变生活</h1>
            <pre class="description">{{recure}}</pre>
          </el-card>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: `    自闭症谱系障碍是一个医学名词，它是一种广泛性发展障碍，现多使用于儿童身上。其病征包括异常的语言能力、异常的交往能力、狭窄的兴趣以及固执的行为模式。在这个谱系障碍中，儿童自闭症是儿童精神类疾病当中最为严重的一种。
    自闭症谱系障碍（ASD，Autism Spectrum Disorder ），是根据典型自闭症的核心症状进行扩展定义的广泛意义上的自闭症，既包括了典型自闭症，也包括了不典型自闭症，又包括了阿斯伯格综合症、自闭症边缘、自闭症疑似、自闭症倾向、发育迟缓等症状。
    自闭症，又称孤独症，是一种较为严重的广泛性发展障碍疾病。目前，自闭症的病因仍是世界医学的未解难题，可以排除的是自闭症与后天的家庭教养无关。该病男女发病率差异显著，在我国男女患病率比例为6—9：1。典型自闭症，其核心症状就是所谓的“三联症”，主要体现为在社会性和交流能力、语言能力、仪式化的刻板行为三个方面同时都具有本质的缺损。其主要症状为：
        1、社会交往障碍：一般表现为与他人交往困难或不愿意交往，严重者甚至与父母缺乏情感依恋；
        2、语言交流障碍：完全无语言、语言发育落后、语言能力倒退，或者鹦鹉学舌式重复语言；
        3、重复刻板行为：兴趣狭窄、异常动作频繁、性格固执不愿意接受改变。
    不典型自闭症则在前述三个方面不全具有缺陷，只具有其中之一或之二。`,
      recure: `    自闭症应于2岁确诊并实行早期干预。自闭症患者的大脑发育异常，虽然大多数患者通过脑电图、磁共振未能发现问题，但也只能说是由于现代医疗科技尚不发达。达到3岁才能确诊自闭症的说法最近若干年一直流行。其实这种说法对及早进行自闭症干预造成了被动。1-3岁是儿童神经系统发育的关键时期，也是开语言、形成正确认知的关键时间。在2岁时及早确诊，应可争取到最为宝贵的治疗时间。2岁应该可以确诊是否有自闭症。正常的婴幼儿，1岁左右以后开语言，眼神交流灵活有神，能通过语言并结合眼神、肢体语言实现交流，脾气性格正常，从开始学说话，到能够说话流利，口语的成分越来越多，肢体语言的成分越来越少，这个过程大概持续1年左右。也有语迟的婴幼儿，到2岁、甚至3岁才开语言，但是他们此前的眼神语言丰富，肢体语言很多，可以基本完成与他人的交流。排除了弱智等疾病，如果一个2岁儿童，没有开口说话，没有眼神交流，也没有肢体语言，又有刻板行为，脾气性格冲动任性；或者虽然有了语言，但是不能正确组织语言，不看别人的眼神，有刻板行为，不能和其他小朋友一起玩耍；或者先是出了语言，后来有全部退化掉，躲避别人的目光眼神，那么，就基本可以确诊这个孩子患有自闭症了。
    在2岁时实行及时的干预会有很好的收效，尤其是对于程度严重的自闭症儿童而言。一旦晚于这个年龄，严重的自闭症患者在3岁以后再确诊、干预，收效就不太乐观，自闭症或许会伴随终生。程度为中度的自闭症儿童，6岁以前的干预都会有不同程度的收效。程度较轻的自闭症患者，6岁以后仍有机会，这种机会或许一直延续到12岁左右（6岁左右，神经系统发育完成了80%-90%，其余10%-20%会在12左右基本完成）。因医疗条件差异、家长承认现实的时间差异等，患者确诊自闭症的年龄各有不同。但不论什么时候确诊，12岁之前都会有一线生机，只不过发现、确诊、干预越早，效果就会越好。一旦过了12岁这个年龄，神经系统的发育基本完成，除了一些发育较晚的少年还可能有效外，基本上不会再有效果。而对于严重的自闭症患者来说，这个“早”字更为重要。`
    }
  },
  created() {
    //
  }
}
</script>
<style scoped>
.crumb{
font-size:1.6rem;
  line-height: 2.4rem;
  color: #909399;
  float:left;
}
.title{
  font-size:2.4rem;
  /* font-weight:bold; */
  line-height:3rem;
}
.description {
  width: 100%;
  font-size: 1.8rem;
  text-align: left;
  margin:2rem 0;
  line-height: 3.6rem;
  white-space: pre-wrap; /* css3.0 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>
