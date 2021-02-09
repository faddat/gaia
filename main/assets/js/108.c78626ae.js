(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{670:function(v,_,t){"use strict";t.r(_);var a=t(0),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"验证人相关问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证人相关问题"}},[v._v("#")]),v._v(" 验证人相关问题")]),v._v(" "),t("p",[v._v("::: 声明\n这项工作正在进行中。机制和具体值都容易发生变化。\n:::")]),v._v(" "),t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[v._v("#")]),v._v(" 基本概念")]),v._v(" "),t("h3",{attrs:{id:"什么是验证人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是验证人"}},[v._v("#")]),v._v(" 什么是验证人？")]),v._v(" "),t("p",[t("RouterLink",{attrs:{to:"/translations/cn/what-is-gaia.html"}},[v._v("Cosmos Hub")]),v._v("基于"),t("a",{attrs:{href:"https://tendermint.com/docs/introduction/what-is-tendermint.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("Tendermint"),t("OutboundLink")],1),v._v("，它依靠一组验证人来保障网络的安全。验证人的作用是通过广播包含由验证人的私钥签名的加密签名的投票来运行全节点并参与共识。验证人在区块链中提交新的区块并获得收益作为报酬。他们还必须通过对提案进行投票来参与治理。验证人根据他们的总抵押股权来排位。")],1),v._v(" "),t("h3",{attrs:{id:"什么是-抵押"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-抵押"}},[v._v("#")]),v._v(" 什么是'抵押'?")]),v._v(" "),t("p",[v._v("Cosmos Hub是一个权益证明（PoS）区块链，意味着验证人的权重由其抵押的，用作担保金的代币（Atom）的数量决定。这些Atom可以直接由验证人抵押，或者由Atom持有者委托给验证人。")]),v._v(" "),t("p",[v._v("系统中的任何用户都可以通过发送"),t("code",[v._v("create-validator")]),v._v("交易来表明其想成为验证人的意图。从那里，他们成为验证者。从这开始，才能成为验证人。")]),v._v(" "),t("p",[v._v("验证人的权重（即总抵押）决定其是否能成为有效验证人，还有该节点提议区块的频率以及它将获得多少收益。一开始，只有权重最多的100个验证人才是有效验证人。如果验证者双重签名，经常脱机或不参与治理，如果验证人双签，频繁掉线或者不参加治理，他们抵押的Atom(包括那些委托给他们的Atom)会被销毁，也就是‘削减处罚’。")]),v._v(" "),t("h3",{attrs:{id:"什么是全节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是全节点"}},[v._v("#")]),v._v(" 什么是全节点？")]),v._v(" "),t("p",[v._v("全节点是一个全程验证区块链的交易和区块的程序。区别于只处理区块头信息和小部分交易的轻节点。运行一个全节点比轻节点需要更多的资源，这也是成为验证人必须要具备的。实际上，运行全节点意味着运行网络延迟较低且不掉线的软件的最新版本。")]),v._v(" "),t("p",[v._v("当然，我们鼓励任何用户都去运行一个全节点，即使他们并不打算成为验证人。")]),v._v(" "),t("h3",{attrs:{id:"什么是委托人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是委托人"}},[v._v("#")]),v._v(" 什么是委托人？")]),v._v(" "),t("p",[v._v("委托人是那些没有能力或者不想执行验证人操作的Atom持有者。通过"),t("a",{attrs:{href:"https://cosmos.network/docs/getting-started/voyager.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("Cosmos Voyager"),t("OutboundLink")],1),v._v("，一个用户可以把Atom委托给一个验证人，并获取一部分交易收益（关于收益是如何分配的，查看下面的"),t("a",{attrs:{href:"#%E6%8A%B5%E6%8A%BC%E6%9C%89%E4%BB%80%E4%B9%88%E6%BF%80%E5%8A%B1?"}},[t("strong",[v._v("抵押有什么激励?")])]),v._v("和"),t("a",{attrs:{href:"#%E8%BF%90%E8%A1%8C%E4%B8%80%E4%B8%AA%E9%AA%8C%E8%AF%81%E4%BA%BA%E6%9C%89%E4%BB%80%E4%B9%88%E6%BF%80%E5%8A%B1?"}},[t("strong",[v._v("运行一个验证人有什么激励?")])]),v._v("）")]),v._v(" "),t("p",[v._v("委托人与他们的验证人分享收益，所以委托人也要共担责任。如果一个验证人行为不端，每一个相关的委托人也会按比例遭受股权的部分削减处罚。这就是为什么委托人在委托之前应该履行调查职责，还要尽量把股权分散给多个验证人。")]),v._v(" "),t("p",[v._v("委托人在系统里扮演了一个关键角色，因为他们负责选举验证人。委托人也并不是一个消极的角色：委托人应该积极监控验证人的行为，并参与到治理当中。")]),v._v(" "),t("h2",{attrs:{id:"成为一个验证人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#成为一个验证人"}},[v._v("#")]),v._v(" 成为一个验证人")]),v._v(" "),t("h3",{attrs:{id:"如何成为一个验证人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何成为一个验证人"}},[v._v("#")]),v._v(" 如何成为一个验证人？")]),v._v(" "),t("p",[v._v("网络中的任何参与者都可以通过发送一笔"),t("code",[v._v("create-validator")]),v._v("交易来表明他们想成为一个验证人，必须要填写下列参数：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("验证人的公钥："),t("strong",[v._v("用于签名")]),v._v("投票")]),v._v("和"),t("strong",[v._v("提交")]),v._v("的私钥对应的公钥。通过这种方式，验证人可以用不同的账户分别去做验证和持有流动资金。")]),v._v(" "),t("li",[v._v("**验证人的地址：**应用程序级别的地址。这是用于外界识别验证人的地址。与此地址关联的私钥用于绑定，取消绑定，声明奖励和参与治理（仅限MVP）。")]),v._v(" "),t("li",[t("strong",[v._v("验证人的名称(moniker)")])]),v._v(" "),t("li",[t("strong",[v._v("验证人的网站（可选的）")])]),v._v(" "),t("li",[t("strong",[v._v("验证人的描述信息（可选的）")])]),v._v(" "),t("li",[v._v("**初始佣金比例：**区块增发奖励，区块奖励，交易手续费中抽成给验证人的初始比例")]),v._v(" "),t("li",[v._v("**最大佣金：**该验证人保证的最大佣金率")]),v._v(" "),t("li",[v._v("**佣金变化率：**验证人候选者的最大每日佣金增长率")]),v._v(" "),t("li",[v._v("**最小自抵押数量：**验证人在任何时候所要的抵押的最小Atom数量。如果验证人的自抵押股权数量跌破了这个限制，其整个抵押池都会被释放。")]),v._v(" "),t("li",[v._v("**初始自抵押数量：**验证人最初的自抵押的Atom数量")])]),v._v(" "),t("p",[v._v("一旦创建了验证人，Atom持有者可以向其委托Atom，有效地向股权池里增加股权。一个地址的总股权是验证人自抵押的Atom和委托人委托的Atom的总和。")]),v._v(" "),t("p",[v._v("在所有表明的验证人中，股权最多的100名被任命为有效验证人。如果某个验证人的股权总量跌出了前100名就会失去验证人权利。随着时间的推移，验证人的最大数量会依照计划逐渐增加：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("Year 0:")]),v._v(" 100")]),v._v(" "),t("li",[t("strong",[v._v("Year 1:")]),v._v(" 113")]),v._v(" "),t("li",[t("strong",[v._v("Year 2:")]),v._v(" 127")]),v._v(" "),t("li",[t("strong",[v._v("Year 3:")]),v._v(" 144")]),v._v(" "),t("li",[t("strong",[v._v("Year 4:")]),v._v(" 163")]),v._v(" "),t("li",[t("strong",[v._v("Year 5:")]),v._v(" 184")]),v._v(" "),t("li",[t("strong",[v._v("Year 6:")]),v._v(" 208")]),v._v(" "),t("li",[t("strong",[v._v("Year 7:")]),v._v(" 235")]),v._v(" "),t("li",[t("strong",[v._v("Year 8:")]),v._v(" 265")]),v._v(" "),t("li",[t("strong",[v._v("Year 9:")]),v._v(" 300")]),v._v(" "),t("li",[t("strong",[v._v("Year 10:")]),v._v(" 300")])]),v._v(" "),t("h2",{attrs:{id:"测试网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试网"}},[v._v("#")]),v._v(" 测试网")]),v._v(" "),t("h3",{attrs:{id:"我要怎样加入到测试网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我要怎样加入到测试网"}},[v._v("#")]),v._v(" 我要怎样加入到测试网？")]),v._v(" "),t("p",[v._v("测试网络是一个在主网上线之前很好的测试验证人设置的环境。")]),v._v(" "),t("p",[v._v("我们将参与测试网络视为一个向社区展示你是有准备且有能力去运行验证人节点的方式。你可以在"),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/develop/cmd/gaia/testnets",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),t("OutboundLink")],1),v._v("和"),t("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),t("OutboundLink")],1),v._v("找到有关测试网的更多内容。")]),v._v(" "),t("h3",{attrs:{id:"密钥的不同类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#密钥的不同类型"}},[v._v("#")]),v._v(" 密钥的不同类型？")]),v._v(" "),t("p",[v._v("简而言之有两种密钥：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("Tendermint Key")]),v._v(" ：这是用于对区块哈希进行签名的唯一密钥。它与一个公钥"),t("code",[v._v("cosmosvalconspub")]),v._v("相关联。\n"),t("ul",[t("li",[v._v("使用"),t("code",[v._v("gaiad init")]),v._v("创建节点时生成。")]),v._v(" "),t("li",[v._v("使用"),t("code",[v._v("gaiad tendermint show-validator")]),v._v("查看，如"),t("code",[v._v("cosmosvalconspub1zcjduc3qcyj09qc03elte23zwshdx92jm6ce88fgc90rtqhjx8v0608qh5ssp0w94c")]),v._v("。")])])]),v._v(" "),t("li",[t("strong",[v._v("Application keys")]),v._v(" ：这些密钥是由应用程序创建的，用于签名交易。作为验证人，你可能会使用一个密钥来签名与抵押相关的交易，另一个密钥用于签署与治理相关的交易。应用程序私钥和公钥"),t("code",[v._v("cosmospub")]),v._v("及地址"),t("code",[v._v("cosmos")]),v._v("相关联。两者都来自"),t("code",[v._v("gaiad keys add")]),v._v("生成的帐户私钥。\n"),t("ul",[t("li",[v._v("注意：验证人的操作员的私钥直接绑定到应用程序私钥，但为此目的保留前缀："),t("code",[v._v("cosmosvaloper")]),v._v("和"),t("code",[v._v("cosmosvaloperpub")])])])])]),v._v(" "),t("h3",{attrs:{id:"验证人可以具有哪些不同的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证人可以具有哪些不同的状态"}},[v._v("#")]),v._v(" 验证人可以具有哪些不同的状态")]),v._v(" "),t("p",[v._v("使用"),t("code",[v._v("create-validator")]),v._v("交易创建验证人后，它可以处于三种状态：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("bonded")]),v._v(" : 验证人在活跃集合中并参与共识。验证人正在获得奖励，并且可能因为不当行为而遭到削减处罚。")]),v._v(" "),t("li",[t("code",[v._v("unbonding")]),v._v(" : 验证人不在活跃集合中，也不参与共识。验证人没有获得奖励，但仍然可能因为不当行为而遭到削减处罚。这是从"),t("code",[v._v("bonded")]),v._v("到"),t("code",[v._v("unbonding")]),v._v("的过渡状态。如果验证人在"),t("code",[v._v("unbonding")]),v._v("模式下未发送"),t("code",[v._v("rebond")]),v._v("交易，则状态转换将需要三周时间才能完成。")]),v._v(" "),t("li",[t("code",[v._v("unbonded")]),v._v(" : 验证人不在活跃集合中，因此不签署区块。验证人不能遭到削减处罚，也不会获得任何奖励。仍然可以将Atom委托给此验证人。从"),t("code",[v._v("unbonded")]),v._v("状态的验证人取消委托是立即的。")])]),v._v(" "),t("p",[v._v("委托人与其验证人具有相同的状态。")]),v._v(" "),t("p",[v._v("请注意，委托不一定是绑定的。Atom可以是delegated和bonded状态，delegated和unbonding状态，delegated和unbonded状态，或流通状态。")]),v._v(" "),t("h3",{attrs:{id:"什么是self-bond-怎样增加我的self-bond-有水龙头吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是self-bond-怎样增加我的self-bond-有水龙头吗"}},[v._v("#")]),v._v(" 什么是"),t("code",[v._v("self-bond")]),v._v("?怎样增加我的"),t("code",[v._v("self-bond")]),v._v("?有水龙头吗？")]),v._v(" "),t("p",[v._v("如果你想获得测试网的测试币，你可以使用这个"),t("a",{attrs:{href:"https://faucet.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[v._v("水龙头"),t("OutboundLink")],1),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"成为一个活跃的-bonded-验证人必须要抵押最小数量的atom吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#成为一个活跃的-bonded-验证人必须要抵押最小数量的atom吗"}},[v._v("#")]),v._v(" 成为一个活跃的（=bonded）验证人必须要抵押最小数量的Atom吗？")]),v._v(" "),t("p",[v._v("没有最小限制。总股权（总股权=自抵押股权+委托股权）最高的前100名是活跃验证人。")]),v._v(" "),t("h4",{attrs:{id:"委托人要怎样选择验证人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#委托人要怎样选择验证人"}},[v._v("#")]),v._v(" 委托人要怎样选择验证人?")]),v._v(" "),t("p",[v._v("委托人可以根据他们的主观判断随意去选择验证人。也就是说，包括对以下内容的判断相当重要：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("自抵押的Atom数量")]),v._v("：一个验证人在股权池里自抵押的Atom数量。有着更多自抵押Atom的验证人承担了更大的风险，将促使其对自己的行为更加负责。")]),v._v(" "),t("li",[t("strong",[v._v("委托的Atom总量")]),v._v(": 委托给某个验证人的Atom总量。大量的股权显示社区对该验证人的信任，但这也意味着该验证人更容易成为黑客们的目标。实际上，黑客更倾向攻击更大的验证人，这样他们可能会从不能抵御攻击的验证人那里获得更多。随着委托的Atom的增长，验证人也被期待不要太过引人注目。")]),v._v(" "),t("li",[t("strong",[v._v("佣金比率")]),v._v("： 在把奖励分散给委托人之前抽成一部分佣金来奖励验证人。")]),v._v(" "),t("li",[t("strong",[v._v("跟踪记录")]),v._v("：委托人很可能去查看他们计划去委托的验证人的行为记录。包括资历，过去对提议的投票，历史的平均运行时长和验证人节点掉线的频率。")])]),v._v(" "),t("p",[v._v("除去这些会展示在Cosmos Voyager上的评判标准，验证人还可能向公众展示一个网站来完善他们的简历。验证人需要通过多种方式去树立良好的声誉来吸引委托人。比如，验证人让第三方来审计他们的设置就是一个很好的实践。注意，Tendermint团队将不会批准和引导任何对自身的审计。有关尽职调查的更多信息，请参阅此"),t("a",{attrs:{href:"https://medium.com/@interchain_io/3d0faf10ce6f",target:"_blank",rel:"noopener noreferrer"}},[v._v("博客"),t("OutboundLink")],1)]),v._v(" "),t("h2",{attrs:{id:"责任"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#责任"}},[v._v("#")]),v._v(" 责任")]),v._v(" "),t("h3",{attrs:{id:"验证人需要公开表明身份吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证人需要公开表明身份吗"}},[v._v("#")]),v._v(" 验证人需要公开表明身份吗?")]),v._v(" "),t("p",[v._v("不需要。每个委托人会用他们自己的评判标准去衡量验证人的价值。验证人可以（也被推荐）在他们提名自己时注册一个网站，以便他们可以按照自己的意愿宣传自己的行动。一些委托人可能更喜欢通过一个清楚展示团队是如何去运行验证人节点以及团队成员的简历的网站来帮助选择，尽管其他一些委托人更偏好那些隐藏了行为记录的匿名验证人。最有可能的是身份明确的验证人和匿名的验证人都会存在于验证人集合中。")]),v._v(" "),t("h3",{attrs:{id:"一个验证人要担负哪些责任"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个验证人要担负哪些责任"}},[v._v("#")]),v._v(" 一个验证人要担负哪些责任？")]),v._v(" "),t("p",[v._v("验证人有两个主要的职责：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("能够不断运行软件的正确版本")]),v._v("：验证人需要去保证他们的服务器任何时刻都在线，保护其私钥避免遭到窃取。")]),v._v(" "),t("li",[t("strong",[v._v("积极地参与治理")]),v._v("：验证人需要对每个提案投票表决。")])]),v._v(" "),t("p",[v._v("此外，验证人应该是社区的活跃成员。他们应该始终与生态系统的当前状态保持同步，以便他们能够轻松适应任何变化。")]),v._v(" "),t("h3",{attrs:{id:"参与治理-需要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参与治理-需要"}},[v._v("#")]),v._v(' "参与治理"需要?')]),v._v(" "),t("p",[v._v("Cosmos Hub中的验证人员和委托人可以就改变运行参数（例如区块燃料限制），协调升级以及对治理Cosmos Hub的宪法的修正方案进行投票表决。")]),v._v(" "),t("p",[v._v("验证人在治理系统中发挥着特殊作用。身为系统的支柱他们需要对每一个提案进行投票表决。这是尤其重要的，因为委托人把票权给了验证人而自己无法直接去投票。每次当某个验证人不去对一个提案投票表决时，他就会遭受削减处罚。")]),v._v(" "),t("h3",{attrs:{id:"抵押是指"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抵押是指"}},[v._v("#")]),v._v(" 抵押是指？")]),v._v(" "),t("p",[v._v("抵押Atom可以被认为是一种在验证活动中进行的安全储蓄。当一个验证人或者委托人想要拿回部分甚至所有的存款时，他们就发送一笔unbonding交易。然后，Atom会经历一个"),t("em",[v._v("3周的解绑周期")]),v._v("，在unbonding开始前他们容易因错误提交而遭到削减处罚。")]),v._v(" "),t("p",[v._v("验证人，和与其形成联盟的委托人，得到区块增发奖励，区块奖励和手续费奖励，还有参与治理的权利。如果一个验证人行为不端，它的总股份的一部分会遭削减处罚（处罚的严厉性取决于错误行为的类型）。这意味着每一个往验证人委托Atom的用户也会受到一定比例的处罚。因此委托人倾向于把Atom委托给那些规范安全运作的验证人。")]),v._v(" "),t("h3",{attrs:{id:"验证人可以卷走委托人的atom跑路吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证人可以卷走委托人的atom跑路吗"}},[v._v("#")]),v._v(" 验证人可以卷走委托人的Atom跑路吗?")]),v._v(" "),t("p",[v._v("向一个验证人委托，用户只是委托了他的股权。验证人有更多的股权，在共识和治理工程中也就有了更大的权重。这不意味着验证人可以扣押其委托人的Atom。一个验证人是绝不可能带着委托人的Atom跑路的。")]),v._v(" "),t("p",[v._v("尽管委托资金不可能被验证人盗取，委托人仍然要对他们的验证人做出的不端行为负责。这种情况下，每个委托人的股权也会按其股权比例遭到部分的削减处罚。")]),v._v(" "),t("h3",{attrs:{id:"一个验证人多久被选择提议下一个区块-会随着抵押的atom数量上升吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个验证人多久被选择提议下一个区块-会随着抵押的atom数量上升吗"}},[v._v("#")]),v._v(" 一个验证人多久被选择提议下一个区块？会随着抵押的Atom数量上升吗？")]),v._v(" "),t("p",[v._v("被选作提议下一个区块的验证人称为提案人。每个提案人都是由明确的方式选出来的，被选的频率也与他们的总股权相等（总股权=自抵押股权+委托股权）。比如，如果所有验证人总的抵押股权是100个Atom，一个验证人的总股权是10个Atom，那么有10%的时间该验证人会被选作下一个提案人。")]),v._v(" "),t("h3",{attrs:{id:"cosmos-hub的验证人需要去验证cosmos生态中的其他分区吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub的验证人需要去验证cosmos生态中的其他分区吗"}},[v._v("#")]),v._v(" Cosmos Hub的验证人需要去验证Cosmos生态中的其他分区吗？")]),v._v(" "),t("p",[v._v("是的，他们会如此。最初，Cosmos Hub的验证人还会验证第一个公共Ethermint分区。如果通过治理决定这么做，Cosmos Hub的验证人可能需要去验证Cosmos生态系统里的其它分区。就Ethermint分区而言，对每个额外的分区奖励都会以区块奖励和交易手续费的形式来提供。")]),v._v(" "),t("h2",{attrs:{id:"激励"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#激励"}},[v._v("#")]),v._v(" 激励")]),v._v(" "),t("h3",{attrs:{id:"抵押有什么激励"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抵押有什么激励"}},[v._v("#")]),v._v(" 抵押有什么激励？")]),v._v(" "),t("p",[v._v("一个验证人股权池里的每个成员赚取不同类型的收益：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("区块增发奖励")]),v._v("： 验证人运行的应用里的原生的token（例如Cosmos Hub中的Atom）会是通胀的，用作区块增发奖励。这些增发奖励激励Atom持有者去抵押他们的股权，所以未绑定的Atom会随着时间的流逝而稀释。")]),v._v(" "),t("li",[t("strong",[v._v("区块奖励")]),v._v("： 对于Ethermint分区，区块奖励会以Photon来支付。对Ethereum进行硬分叉来完成初始的分配。这意味着Photon会按和Ether的比例1：1发放。")]),v._v(" "),t("li",[t("strong",[v._v("交易手续费")]),v._v("：Cosmos Hub维持一个token的白名单，上面的token都能作为手续费。")])]),v._v(" "),t("p",[v._v("这些总收益会按验证人股权池中每个验证人所占的权重来进行分配。然后，每个验证人的股权池的收益又会根据其每一个委托人的股权来分配。注意，会在分配前从委托人所得中抽取佣金给予验证人。")]),v._v(" "),t("h3",{attrs:{id:"运行一个验证人有什么激励"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行一个验证人有什么激励"}},[v._v("#")]),v._v(" 运行一个验证人有什么激励?")]),v._v(" "),t("p",[v._v("由于能抽成佣金，验证人比起他们的委托人能按比例赚取更多的收益。")]),v._v(" "),t("p",[v._v("验证人在治理中充当一个重要角色。如果一个委托人没有投票，他也能从他的验证人那里继承到投票权。这样验证人在生态里承担主要的责任。")]),v._v(" "),t("h3",{attrs:{id:"什么是验证人的佣金"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是验证人的佣金"}},[v._v("#")]),v._v(" 什么是验证人的佣金?")]),v._v(" "),t("p",[v._v("一个验证人的股权池收到的收益会被拆分为给验证人的部分和给委托人的部分。验证人可以从给其委托人的收益中抽取一部分作为给自己佣金奖励。这个佣金被设置成一个百分比。每个验证人可以随意设置初始佣金，最大每日佣金变化率和最大佣金。Cosmos Hub强制每个验证人都要明确设置这些参数。这些参数只能在一开始声明竞选时设置，也只可能在声明之后被进一步限制。")]),v._v(" "),t("h3",{attrs:{id:"区块增发奖励怎么分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#区块增发奖励怎么分配"}},[v._v("#")]),v._v(" 区块增发奖励怎么分配?")]),v._v(" "),t("p",[v._v("区块增发奖励会按验证人的总股权来成比例地发放。这意味着即使每个验证人每次增发奖励时都获得了Atom，但所有验证人仍然会维持相等的权重。")]),v._v(" "),t("p",[v._v("让我们举一个例子：我们有着股权相等的10个验证人，佣金比例是1%。然后我们假设一个区块的增发奖励是1000个Atom，每一个验证人有20%的自抵押Atom。这些token不会直接分给提案人。而是被均匀地分发给验证人。所以现在每个验证人的股权池获得100个Atom。这100个Atom会依据每个参与者的股权来分发：")]),v._v(" "),t("ul",[t("li",[v._v("佣金："),t("code",[v._v("100*80%*1% = 0.8 Atoms")])]),v._v(" "),t("li",[v._v("验证人获得部分： "),t("code",[v._v("100*20% + 佣金 = 20.8 Atoms")])]),v._v(" "),t("li",[v._v("委托人获得部分： "),t("code",[v._v("100*80% - 佣金 = 79.2 Atoms")])])]),v._v(" "),t("p",[v._v("然后，每个委托人可以按照他们在验证人股权池中的股权，从79.2个Atom中等比例地索要属于他们应得的那一份。注意验证人的佣金不仅只适用于区块增发奖励，也适用于区块奖励（使用Photon支付）。")]),v._v(" "),t("h3",{attrs:{id:"交易手续费怎么分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交易手续费怎么分配"}},[v._v("#")]),v._v(" 交易手续费怎么分配?")]),v._v(" "),t("p",[v._v("手续费以类似的方式分发，不同之处在于，如果区块的提案人有多于明确的提交所需的最小值，区块提案人就可以在由其提议的区块手续费中获得一笔奖励。")]),v._v(" "),t("p",[v._v("当一个验证人被选作去提议下一个区块时，必须要含有对当前区块至少2/3的验证人签名许可。尽管如此，仍然存在有一个激励去奖励那些超过2/3的验证人签名许可。这个奖励是线性的：如果提案人含有2/3的签名许可（区块有效的最小值），比例是1%， 如果提案人含有100%的签名许可，比例是5%。当然，提案人不应该等待太久去做提案，或许其他的验证人有可能超时，长时间的等待容易造成提案的延误。这样的话，验证人不得不在获取最多签名的等待时间和失去对下个区块的提案之间寻找一个平衡点。这个机制旨在提案人不要去提案空块，维护验证人之间更好的网络，还有减轻审查。")]),v._v(" "),t("p",[v._v("让我们举一个实际的例子来说明上面的概念。在这个例子中，有着10个股权相等的验证人。每个验证人采用1%的佣金比例，有20%的自抵押Atom。现在，产出了一个有着1025.51020408个Atom手续费的区块。")]),v._v(" "),t("p",[v._v("首先，一个 2% 的税是必须的。这部分Atom会进入贮存池中。贮存池里的资金会通过治理来分配，用来作奖赏和更新升级的花费。")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("2% * 1025.51020408 = 20.51020408 Atoms")]),v._v(" 进入到贮存池中")])]),v._v(" "),t("p",[v._v("现在只剩下了1005个Atom。让我们假设提案人提案的区块包含了100%的验证人签名。因此提案人能获得手续费奖励中的5%的额外奖励。")]),v._v(" "),t("p",[v._v("我们解这个简单的算式得出给每一个验证人的奖励R :")]),v._v(" "),t("p",[t("code",[v._v("9*R + R + R*5% = 1005 ⇔ R = 1005/10.05 = 100")])]),v._v(" "),t("ul",[t("li",[v._v("对于发起提案的验证人：\n"),t("ul",[t("li",[v._v("奖金池获得 "),t("code",[v._v("R + R * 5% = 105 Atoms")])]),v._v(" "),t("li",[v._v("佣金： "),t("code",[v._v("105 * 80% * 1% = 0.84 Atoms")])]),v._v(" "),t("li",[v._v("验证人的奖励： "),t("code",[v._v("105 * 20% + 佣金 = 21.84 Atoms")])]),v._v(" "),t("li",[v._v("委托人的奖励： "),t("code",[v._v("105 * 80% - 佣金 = 83.16 Atoms")]),v._v("（每个委托人可以按照他们的股权占比等比例地索要这部分奖励）")])])]),v._v(" "),t("li",[v._v("对于每个非提案验证人：\n"),t("ul",[t("li",[v._v("奖金池获得 "),t("code",[v._v("R = 100 Atoms")])]),v._v(" "),t("li",[v._v("佣金： "),t("code",[v._v("100 * 80% * 1% = 0.8 Atoms")])]),v._v(" "),t("li",[v._v("验证人的奖励： "),t("code",[v._v("100 * 20% + 佣金 = 20.8 Atoms")])]),v._v(" "),t("li",[v._v("委托人的奖励： "),t("code",[v._v("100 * 80% - 佣金 = 79.2 Atoms")]),v._v("（每个委托人可以按照他们的股权占比等比例地索要这部分奖励）")])])])]),v._v(" "),t("h3",{attrs:{id:"遭到削减处罚的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遭到削减处罚的原因"}},[v._v("#")]),v._v(" 遭到削减处罚的原因?")]),v._v(" "),t("p",[v._v("如果一个验证人行为不端，其抵押的股权，连同其委托人的股权都会遭到削减处罚。处罚的严重性依据错误的类型来定。有3个主要的错误会导致验证人和其委托人的资金遭到削减处罚：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("双签")]),v._v("：如果某人反馈在A链上，一个验证人在相同高度的A链和B链上签署了两个区块，这个验证人会被A链处罚。")]),v._v(" "),t("li",[t("strong",[v._v("不在线")]),v._v("： 如果一个验证人的签名没有被最近的X个区块包含，对该验证人会按与X成比例的最低额度来处罚。如果X高于某个限制Y，这个验证人会被赎回下线。")]),v._v(" "),t("li",[t("strong",[v._v("不投票")]),v._v("： 如果一个验证人没有对某个提案投票表决，一旦被某个人举报，他的股权会受到削减处罚。")])]),v._v(" "),t("p",[v._v("请注意，即使一个验证人并不是有意作恶，在出现节点崩溃，失去连接，被DDOS攻击，或者是私钥泄露的情况时，仍然会被遭受削减处罚。")]),v._v(" "),t("h3",{attrs:{id:"验证人需要去自抵押一些atom吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证人需要去自抵押一些atom吗"}},[v._v("#")]),v._v(" 验证人需要去自抵押一些Atom吗?")]),v._v(" "),t("p",[v._v("不，他们不必。一个验证人的总股权等于其自抵押股权和受委托股权的总和。这意味着一个验证人可以通过吸引更多委托人来补偿其低额的自抵押股权。这也是为何对验证人而言，良好的声誉是极其重要的。")]),v._v(" "),t("p",[v._v("尽管对验证人来说是并没有义务去自抵押Atom，委托人还是希望他们的验证人在其股权池里有一定的自抵押Atom。换句话说，验证人应该共担风险。")]),v._v(" "),t("p",[v._v("为了委托人能获得一些与之共担风险的验证人给予的保证，验证人可以声明一个最小数量的自抵押Atom额度。如果一个验证人的自抵押额度低于预先定义的限制，该验证人和其所有的委托人的股权都会被赎回。")]),v._v(" "),t("h3",{attrs:{id:"怎样预防股权集中到少数的验证人手中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎样预防股权集中到少数的验证人手中"}},[v._v("#")]),v._v(" 怎样预防股权集中到少数的验证人手中？")]),v._v(" "),t("p",[v._v("目前我们期望社区能有更明智的和有自我保护意识的行为表现。当一个Bitcoin的矿池获得过多的算力时，社区通常会停止向该矿池贡献算力。Cosmos Hub在初期也将会依赖同样的方式。之后，其他的机制会被应用，来尽可能地使这个过程更顺畅：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("免处罚的重新委托")]),v._v(" ：这允许委托人轻易地从一个验证人切换到另一个验证人，从而降低对验证人的粘性")]),v._v(" "),t("li",[t("strong",[v._v("黑客赏金")]),v._v("： 激励社区去攻击验证人。攻击者将获得与所攻击的验证人规模成比例的赏金，促使一个验证人随着其总股权的增长，成为一个受人关注的攻击目标。")]),v._v(" "),t("li",[t("strong",[v._v("UI警告")]),v._v("： 如果用户想要去委托股权给一个已经有了大量股权的验证人的话，用户会收到来自Cosmos Voyager的警告。")])]),v._v(" "),t("h2",{attrs:{id:"技术要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术要求"}},[v._v("#")]),v._v(" 技术要求")]),v._v(" "),t("h3",{attrs:{id:"对硬件的要求是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对硬件的要求是什么"}},[v._v("#")]),v._v(" 对硬件的要求是什么？")]),v._v(" "),t("p",[v._v("我们期望验证人供应一个或多个的有着充足电力，网络资源，防火墙安全，HSM和服务器的数据中心。")]),v._v(" "),t("p",[v._v("我们期望初期能有一个适度级别的硬件规格说明书，会随着网络使用的增长而逐步提高标准。参与到测试网络是了解更多情况的不错方式。")]),v._v(" "),t("h3",{attrs:{id:"对软件有什么要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对软件有什么要求"}},[v._v("#")]),v._v(" 对软件有什么要求？")]),v._v(" "),t("p",[v._v("除了能运行一个Cosmos Hub节点，验证人还应该开发相关的监控，预警和管理工具。")]),v._v(" "),t("h3",{attrs:{id:"对带宽有什么要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对带宽有什么要求"}},[v._v("#")]),v._v(" 对带宽有什么要求？")]),v._v(" "),t("p",[v._v("与像Ethereum或Bitcoin这样的区块链相比，Cosmos网络要有高吞吐量的性能。")]),v._v(" "),t("p",[v._v("我们建议数据中心只在云服务上连接信任的全节点或者是熟知的验证人节点，这会减轻数据中心遭受DDOS攻击的压力。")]),v._v(" "),t("p",[v._v("最后，随着网络越来越被重度使用，具有单日GB级别的带宽是可能的。")]),v._v(" "),t("h3",{attrs:{id:"运行一个验证人节点意味着什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行一个验证人节点意味着什么"}},[v._v("#")]),v._v(" 运行一个验证人节点意味着什么？")]),v._v(" "),t("p",[v._v("运行一个成功的验证人节点需要多方面的高超技艺的和持久关注的共同努力。相比运行一个Bitcoin矿工节点要付出更多。")]),v._v(" "),t("h3",{attrs:{id:"怎样去进行密钥管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎样去进行密钥管理"}},[v._v("#")]),v._v(" 怎样去进行密钥管理?")]),v._v(" "),t("p",[v._v("我们期望验证人去运行一个HSM来支持ed25519密钥。下面是可能的选择：")]),v._v(" "),t("ul",[t("li",[v._v("YubiHSM 2")]),v._v(" "),t("li",[v._v("Ledger Nano S")]),v._v(" "),t("li",[v._v("Ledger BOLOS SGX enclave")]),v._v(" "),t("li",[v._v("Thales nShield support")])]),v._v(" "),t("p",[v._v("Tendermint团队不会推荐上面的其中之一。鼓励社区最好加强改进HSM和密钥管理的安全性。")]),v._v(" "),t("h3",{attrs:{id:"在操作上我们期望验证人可以做到哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在操作上我们期望验证人可以做到哪些"}},[v._v("#")]),v._v(" 在操作上我们期望验证人可以做到哪些?")]),v._v(" "),t("p",[v._v("进行有效率的操作是避免验证人节点的意外掉线或遭到削减处罚的关键所在。这包括良好的攻击应对方法，断电情况，还有维持数据中心的安全性和独立性。")]),v._v(" "),t("h3",{attrs:{id:"维护需要什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#维护需要什么"}},[v._v("#")]),v._v(" 维护需要什么？")]),v._v(" "),t("p",[v._v("验证人应该去执行常规的软件升级以适应更新和修复漏洞。在启动阶段的前期阶段不可避免的会出现一些网络问题，这需要大量的警觉。")]),v._v(" "),t("h3",{attrs:{id:"验证人怎样保护自己免于ddos攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证人怎样保护自己免于ddos攻击"}},[v._v("#")]),v._v(" 验证人怎样保护自己免于DDOS攻击？")]),v._v(" "),t("p",[v._v("当一个攻击者向一个IP地址发送海量的因特网流量来阻止该IP地址上的网络服务时，这就是DDOS攻击。")]),v._v(" "),t("p",[v._v("一个攻击者扫描网络，尽量去获得多个验证人节点的IP地址，然后通过向他们发送海量流量来阻断他们之间的连接。")]),v._v(" "),t("p",[v._v("一个降低这样的风险的推荐做法是验证人在所谓的哨兵节点的架构中精心去构建他们的网络拓扑结构。")]),v._v(" "),t("p",[v._v("验证人节点应该只连接到他们所信任的全节点上，因为他们可以操作自身，也可以被他们熟知的其他验证人运行。一个验证人节点通常会运行在一个数据中心。大部分数据中心提供对主流云服务提供商的直接网络连接服务。验证人可以使用去连接云服务中的哨兵节点。验证人节点直接连接到他们的哨兵节点，这样减缓了DOS攻击带来的压力，可能需要新的哨兵节点被激活去减轻已存在的哨兵节点所遭受到的攻击。")]),v._v(" "),t("p",[v._v("哨兵节点能够迅速地被轮换或者改变它们的IP地址。因为与哨兵节点的连接是私有的IP网段，基于因特网的攻击不可能直接骚扰到它们。这将确保验证人区块的提交和投票总是能传播到网络中的其余节点。")]),v._v(" "),t("p",[v._v("期待验证人在这方面良好的操作将完全消除这些威胁。")]),v._v(" "),t("p",[v._v("了解哨兵节点架构的更多信息请看"),t("a",{attrs:{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),t("OutboundLink")],1),v._v("。")])])}),[],!1,null,null,null);_.default=s.exports}}]);