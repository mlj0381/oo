
const soulSoother = [
  '有事做有所期待，日子就是幸福的。',
  '人非要经历一番不同平时的劫难才能脱胎换骨，成为真正能解决问题的人。',
  '务须咬牙厉志，蓄其气而长其志，切不可恭然自馁也。',
  '生活比电影狠多了，从来不给弱者安排大逆转的情节。',
  '即使赚得了全世界，却失去了自己，又有什么意义呢？',
  '不要把时间、财力和劳动，浪费在空洞多余的话语上。',
  '不肯下一点功夫，永远不会明白自己从何而来，又将立足于何处。',
  '凡事不要想得太复杂，手握的太紧，东西会碎，手会疼。',
  '世上本没有路，走的人多了，也便成了路。',
  '通过云端的道路，只亲吻攀登者的足迹。',
  '你多学一样本事，就少说一句求人的话。',
  '我们是如何一步步落后于别人的，自己心里特别清楚，无非是从生活中一点点的差距开始的。',
  '人在千里，家在心里；家在千里，人在心里。',
  '只有创造，才是真正的享受，只有拚搏，才是充实的生活。',
  '世上真正厉害的不是你总能拿到一副好牌，而是哪怕你拿到的是一副差牌，也能赢得胜利！',
  '别抱怨生活的无聊生活嘛，就是无聊中自己找些乐子。',
  '我可以被打败但我不允许自己爬不起来。',
  '行业酷不酷，根本在服务。',
  '我可以耐心等，幸福可以来得慢一些，只要它是真的。',
  '一双好父母，胜过百个好老师。',
  '别去羡慕别人有什么，那还不如自己努力来的实在。',
  '每个人都有过去痛苦或者快乐，每件事都在忘记和记住上纠结！',
  '很多聪明人之所以没有成功，缺少的不是智慧，而是那种为成功而拼搏的干劲。',
  '成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。',
  '退是一种胸怀，让是一种修养，退、让则是一种智慧。',
  '所谓天才，只不过是把别人喝咖啡的功夫都用在工作上了。',
  '善于利用零星时间的人，才会做出更大的成绩来。',
  '从前看脸蛋，如今重内涵。',
  '现实会告诉你，不努力就会被生活踩死，无需找什么借口，一无所有就是拼的理由。',
  '靠山山会倒，靠水水会流，靠自己永远不倒。',
  '精诚所至，金石为开。',
  '一个家庭没有书，就好像一间房子没有窗户。',
  '我从来不把安逸和快乐看作是生活目的的本身。',
  '手指有长有短，知识有高有低。',
  '学无前后，达者为师。',
  '任何不能打倒你的，将会使你更加坚强。',
  '如果你想得到，你就会得到，你所需要付出的只是行动。',
  '世界上最难的事情是坚持，世上最容易的事情也是坚持，不管怎么样只要坚持就能胜利。',
  '因为没有指望，你只能变得更强大。',
  '幸福不是每天都有，错过了就要等很久。',
  '珍惜今天的美好就是为了让明天的回忆更美好。',
  '贵在坚持，难在坚持，成在坚持。',
  '如果你想拥有的更多，那希望就不应寄托在别人身上。',
  '人生的旅途，前途很远，也很暗。然而不要怕，不怕的人的面前才有路。',
  '见得天下皆是坏人，不如见得天下皆是好人。',
  '时间是宝贵的，抓住了时间就抓住了成功。',
  '只有孜孜不倦地求索，才有源源不断的收获。',
  '前面的路还很远，你可能会哭，但是，一定要走下去，一定不能停。',
  '输不起的人，往往就是赢不了。',
  '人生自是有情痴，此恨不关风与月。',
  '要做思想上的领跑者，要做行动上的领跑者。',
  '一个人有钱没钱不必须，但如果这个人没有了梦想，这个人穷定了。',
  '人生是一场马拉松，中途什么事情都有可能发生，跑到最后的最远的才是胜利者。',
  '扬起理想的风帆并为之奋斗，你会真正体会到人生的价值和乐趣。',
  '最大的敌人是自己，只要你战胜了自己，你就是真正的男子汉。',
  '只有身上沾满泥土，心中才会装满百姓。',
  '做人也要像蜡烛一样，在有限的一生中有一分热发一分光，给人以光明，给人以温暖。',
  '受挫受辱之时，务须咬牙励志，蓄其气而长其智。',
  '人无远虑，必有近忧。',
  '如花美眷，似水流年。',
  '塞翁失马，焉知非福。',
  '圣境之下，调心养神。',
  '失之桑榆，收之东隅。',
  '矢志向学，敢于胜利。',
  '谈泊明志，宁静致远。',
  '人之幼稚，不学则愚。',
  '走自己的路，让别人说去。',
  '把握机遇，心想事成。',
  '不勤于始，将悔于终。',
  '不学自知，不问自晓。',
  '坚忍是成功的诀窍。',
  '己所不欲，勿施于人。',
  '日出东方，唯我不败！',
  '天道酬勤，宁静致远。',
  '海纳百川，有容乃大。',
  '进可以攻，退可以守。',
  '淡泊明志，宁静致远。',
  '读书百遍，而义自见。',
  '自弃者扶不起，自强者击不倒。',
  '宁为鸡头，不为凤尾。',
  '飞跃梦想，自强不息。',
  '利剑出鞘，倒海翻江。',
  '突破极限，挑战自我。',
  '人无远虑，必有近忧。',
  '输什么也不输骨气。',
  '永远以用心乐观的心态去拓展自我和身外的世界。'
]

export default soulSoother
