/*(//进攻
 ability.attacking.property.crossing +//传中
 ability.attacking.property.finishing +//射术
 ability.attacking.property.heading +//头球
 ability.attacking.property.shortPassing +//短传
 ability.attacking.property.volleys//凌空
 ) + (//技巧
 ability.skill.property.dribbling +//盘带
 ability.skill.property.curve +//弧线
 ability.skill.property.freeKick +//任意球
 ability.skill.property.longPassing +//长传
 ability.skill.property.ballControl//控球
 ) + (//移动
 ability.movement.property.acceleration +//加速
 ability.movement.property.sprintSpeed +//速度
 ability.movement.property.agility +//敏捷
 ability.movement.property.reactions +//反应
 ability.movement.property.balance//平衡
 ) + (//力量
 ability.power.property.shotPower +//射门力量
 ability.power.property.jumping +//弹跳
 ability.power.property.stamina +//体能
 ability.power.property.strength +//强壮
 ability.power.property.longShots//远射
 ) + (//心理
 ability.mentality.property.aggression +//侵略性
 ability.mentality.property.interceptions +//拦截意识
 ability.mentality.property.positioning +//跑位
 ability.mentality.property.vision +//视野
 ability.mentality.property.penalties +//点球
 ability.mentality.property.composure//沉着
 ) + (//防守
 ability.defending.property.marking +//盯人
 ability.defending.property.standingTackle +//抢断
 ability.defending.property.slidingTackle//铲球
 ) + (//守门
 ability.goalkeeping.property.diving +//鱼跃
 ability.goalkeeping.property.handling +//手抛球
 ability.goalkeeping.property.kicking +//开球
 ability.goalkeeping.property.positioning +//站位
 ability.goalkeeping.property.reflexes//反应
 )*/
export function getPosition(ability, lv) {
    return [
        {
            name: 'ST',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.02 +//传中
                ability.attacking.property.finishing.value * 0.06 +//射术
                ability.attacking.property.heading.value * 0.05 +//头球
                ability.attacking.property.shortPassing.value * 0.06 +//短传
                ability.attacking.property.volleys.value * 0.05//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.07 +//盘带
                ability.skill.property.curve.value * 0.02 +//弧线
                ability.skill.property.freeKick.value * 0.02 +//任意球
                ability.skill.property.longPassing.value * 0.02 +//长传
                ability.skill.property.ballControl.value * 0.06//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.07 +//加速
                ability.movement.property.sprintSpeed.value * 0.07 +//速度
                ability.movement.property.agility.value * 0.04 +//敏捷
                ability.movement.property.reactions.value * 0.04 +//反应
                ability.movement.property.balance.value * 0.03//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.06 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.04 +//体能
                ability.power.property.strength.value * 0.07 +//强壮
                ability.power.property.longShots.value * 0.05//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0 +//侵略性
                ability.mentality.property.interceptions.value * 0.01 +//拦截意识
                ability.mentality.property.positioning.value * 0.05 +//跑位
                ability.mentality.property.vision.value * 0.01 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0.01//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.03 +//盯人
                ability.defending.property.standingTackle.value * 0.03 +//抢断
                ability.defending.property.slidingTackle.value * 0.03//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'AML',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.06 +//传中
                ability.attacking.property.finishing.value * 0.06 +//射术
                ability.attacking.property.heading.value * 0.02 +//头球
                ability.attacking.property.shortPassing.value * 0.06 +//短传
                ability.attacking.property.volleys.value * 0.02//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.07 +//盘带
                ability.skill.property.curve.value * 0.02 +//弧线
                ability.skill.property.freeKick.value * 0.01 +//任意球
                ability.skill.property.longPassing.value * 0.03 +//长传
                ability.skill.property.ballControl.value * 0.06//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.07 +//加速
                ability.movement.property.sprintSpeed.value * 0.07 +//速度
                ability.movement.property.agility.value * 0.07 +//敏捷
                ability.movement.property.reactions.value * 0.05 +//反应
                ability.movement.property.balance.value * 0.04//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.02 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.04 +//体能
                ability.power.property.strength.value * 0.04 +//强壮
                ability.power.property.longShots.value * 0.05//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0 +//侵略性
                ability.mentality.property.interceptions.value * 0.01 +//拦截意识
                ability.mentality.property.positioning.value * 0.05 +//跑位
                ability.mentality.property.vision.value * 0.05 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0.01//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.03 +//盯人
                ability.defending.property.standingTackle.value * 0.03 +//抢断
                ability.defending.property.slidingTackle.value * 0.03//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'AMF',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.02 +//传中
                ability.attacking.property.finishing.value * 0.06 +//射术
                ability.attacking.property.heading.value * 0.05 +//头球
                ability.attacking.property.shortPassing.value * 0.06 +//短传
                ability.attacking.property.volleys.value * 0.05//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.07 +//盘带
                ability.skill.property.curve.value * 0.02 +//弧线
                ability.skill.property.freeKick.value * 0.02 +//任意球
                ability.skill.property.longPassing.value * 0.02 +//长传
                ability.skill.property.ballControl.value * 0.06//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.07 +//加速
                ability.movement.property.sprintSpeed.value * 0.07 +//速度
                ability.movement.property.agility.value * 0.04 +//敏捷
                ability.movement.property.reactions.value * 0.04 +//反应
                ability.movement.property.balance.value * 0.03//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.06 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.04 +//体能
                ability.power.property.strength.value * 0.07 +//强壮
                ability.power.property.longShots.value * 0.05//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0 +//侵略性
                ability.mentality.property.interceptions.value * 0.01 +//拦截意识
                ability.mentality.property.positioning.value * 0.05 +//跑位
                ability.mentality.property.vision.value * 0.01 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0.01//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.03 +//盯人
                ability.defending.property.standingTackle.value * 0.03 +//抢断
                ability.defending.property.slidingTackle.value * 0.03//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'AMR',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.03 +//传中
                ability.attacking.property.finishing.value * 0.06 +//射术
                ability.attacking.property.heading.value * 0.02 +//头球
                ability.attacking.property.shortPassing.value * 0.06 +//短传
                ability.attacking.property.volleys.value * 0.02//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.07 +//盘带
                ability.skill.property.curve.value * 0.02 +//弧线
                ability.skill.property.freeKick.value * 0.01 +//任意球
                ability.skill.property.longPassing.value * 0.06 +//长传
                ability.skill.property.ballControl.value * 0.06//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.07 +//加速
                ability.movement.property.sprintSpeed.value * 0.07 +//速度
                ability.movement.property.agility.value * 0.07 +//敏捷
                ability.movement.property.reactions.value * 0.05 +//反应
                ability.movement.property.balance.value * 0.04//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.02 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.04 +//体能
                ability.power.property.strength.value * 0.04 +//强壮
                ability.power.property.longShots.value * 0.05//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0 +//侵略性
                ability.mentality.property.interceptions.value * 0.01 +//拦截意识
                ability.mentality.property.positioning.value * 0.05 +//跑位
                ability.mentality.property.vision.value * 0.05 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0.01//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.03 +//盯人
                ability.defending.property.standingTackle.value * 0.03 +//抢断
                ability.defending.property.slidingTackle.value * 0.03//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'LMF',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.06 +//传中
                ability.attacking.property.finishing.value * 0.06 +//射术
                ability.attacking.property.heading.value * 0.02 +//头球
                ability.attacking.property.shortPassing.value * 0.06 +//短传
                ability.attacking.property.volleys.value * 0.02//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.07 +//盘带
                ability.skill.property.curve.value * 0.02 +//弧线
                ability.skill.property.freeKick.value * 0.01 +//任意球
                ability.skill.property.longPassing.value * 0.05 +//长传
                ability.skill.property.ballControl.value * 0.06//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.07 +//加速
                ability.movement.property.sprintSpeed.value * 0.07 +//速度
                ability.movement.property.agility.value * 0.04 +//敏捷
                ability.movement.property.reactions.value * 0.05 +//反应
                ability.movement.property.balance.value * 0.04//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.03 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.07 +//体能
                ability.power.property.strength.value * 0.04 +//强壮
                ability.power.property.longShots.value * 0.02//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0 +//侵略性
                ability.mentality.property.interceptions.value * 0.01 +//拦截意识
                ability.mentality.property.positioning.value * 0.05 +//跑位
                ability.mentality.property.vision.value * 0.05 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0.01//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.03 +//盯人
                ability.defending.property.standingTackle.value * 0.03 +//抢断
                ability.defending.property.slidingTackle.value * 0.03//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'CMF',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.02 +//传中
                ability.attacking.property.finishing.value * 0.06 +//射术
                ability.attacking.property.heading.value * 0.02 +//头球
                ability.attacking.property.shortPassing.value * 0.06 +//短传
                ability.attacking.property.volleys.value * 0.02//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.07 +//盘带
                ability.skill.property.curve.value * 0.01 +//弧线
                ability.skill.property.freeKick.value * 0.01 +//任意球
                ability.skill.property.longPassing.value * 0.06 +//长传
                ability.skill.property.ballControl.value * 0.07//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.04 +//加速
                ability.movement.property.sprintSpeed.value * 0.04 +//速度
                ability.movement.property.agility.value * 0.03 +//敏捷
                ability.movement.property.reactions.value * 0.05 +//反应
                ability.movement.property.balance.value * 0.03//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.02 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.07 +//体能
                ability.power.property.strength.value * 0.04 +//强壮
                ability.power.property.longShots.value * 0.06//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0 +//侵略性
                ability.mentality.property.interceptions.value * 0.05 +//拦截意识
                ability.mentality.property.positioning.value * 0.05 +//跑位
                ability.mentality.property.vision.value * 0.05 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0.01//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.03 +//盯人
                ability.defending.property.standingTackle.value * 0.07 +//抢断
                ability.defending.property.slidingTackle.value * 0.03//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'RMF',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.06 +//传中
                ability.attacking.property.finishing.value * 0.06 +//射术
                ability.attacking.property.heading.value * 0.02 +//头球
                ability.attacking.property.shortPassing.value * 0.06 +//短传
                ability.attacking.property.volleys.value * 0.02//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.07 +//盘带
                ability.skill.property.curve.value * 0.02 +//弧线
                ability.skill.property.freeKick.value * 0.01 +//任意球
                ability.skill.property.longPassing.value * 0.05 +//长传
                ability.skill.property.ballControl.value * 0.06//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.07 +//加速
                ability.movement.property.sprintSpeed.value * 0.07 +//速度
                ability.movement.property.agility.value * 0.04 +//敏捷
                ability.movement.property.reactions.value * 0.05 +//反应
                ability.movement.property.balance.value * 0.04//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.03 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.07 +//体能
                ability.power.property.strength.value * 0.04 +//强壮
                ability.power.property.longShots.value * 0.02//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0 +//侵略性
                ability.mentality.property.interceptions.value * 0.01 +//拦截意识
                ability.mentality.property.positioning.value * 0.05 +//跑位
                ability.mentality.property.vision.value * 0.05 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0.01//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.03 +//盯人
                ability.defending.property.standingTackle.value * 0.03 +//抢断
                ability.defending.property.slidingTackle.value * 0.03//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'DMF',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.03 +//传中
                ability.attacking.property.finishing.value * 0.03 +//射术
                ability.attacking.property.heading.value * 0.02 +//头球
                ability.attacking.property.shortPassing.value * 0.06 +//短传
                ability.attacking.property.volleys.value * 0.02//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.03 +//盘带
                ability.skill.property.curve.value * 0.01 +//弧线
                ability.skill.property.freeKick.value * 0.01 +//任意球
                ability.skill.property.longPassing.value * 0.06 +//长传
                ability.skill.property.ballControl.value * 0.07//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.04 +//加速
                ability.movement.property.sprintSpeed.value * 0.04 +//速度
                ability.movement.property.agility.value * 0.04 +//敏捷
                ability.movement.property.reactions.value * 0.05 +//反应
                ability.movement.property.balance.value * 0.03//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.02 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.07 +//体能
                ability.power.property.strength.value * 0.07 +//强壮
                ability.power.property.longShots.value * 0.02//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0.05 +//侵略性
                ability.mentality.property.interceptions.value * 0.05 +//拦截意识
                ability.mentality.property.positioning.value * 0.01 +//跑位
                ability.mentality.property.vision.value * 0.05 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.06 +//盯人
                ability.defending.property.standingTackle.value * 0.07 +//抢断
                ability.defending.property.slidingTackle.value * 0.06//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'LB',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.06 +//传中
                ability.attacking.property.finishing.value * 0.03 +//射术
                ability.attacking.property.heading.value * 0.05 +//头球
                ability.attacking.property.shortPassing.value * 0.05 +//短传
                ability.attacking.property.volleys.value * 0.02//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.03 +//盘带
                ability.skill.property.curve.value * 0.02 +//弧线
                ability.skill.property.freeKick.value * 0.02 +//任意球
                ability.skill.property.longPassing.value * 0.03 +//长传
                ability.skill.property.ballControl.value * 0.06//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.07 +//加速
                ability.movement.property.sprintSpeed.value * 0.07 +//速度
                ability.movement.property.agility.value * 0.04 +//敏捷
                ability.movement.property.reactions.value * 0.05 +//反应
                ability.movement.property.balance.value * 0.04//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.03 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.07 +//体能
                ability.power.property.strength.value * 0.04 +//强壮
                ability.power.property.longShots.value * 0.02//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0.01 +//侵略性
                ability.mentality.property.interceptions.value * 0.05 +//拦截意识
                ability.mentality.property.positioning.value * 0.01 +//跑位
                ability.mentality.property.vision.value * 0.01 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.06 +//盯人
                ability.defending.property.standingTackle.value * 0.06 +//抢断
                ability.defending.property.slidingTackle.value * 0.07//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'CB',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.03 +//传中
                ability.attacking.property.finishing.value * 0.03 +//射术
                ability.attacking.property.heading.value * 0.05 +//头球
                ability.attacking.property.shortPassing.value * 0.06 +//短传
                ability.attacking.property.volleys.value * 0.02//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.03 +//盘带
                ability.skill.property.curve.value * 0.02 +//弧线
                ability.skill.property.freeKick.value * 0.01 +//任意球
                ability.skill.property.longPassing.value * 0.03 +//长传
                ability.skill.property.ballControl.value * 0.06//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.04 +//加速
                ability.movement.property.sprintSpeed.value * 0.07 +//速度
                ability.movement.property.agility.value * 0.04 +//敏捷
                ability.movement.property.reactions.value * 0.05 +//反应
                ability.movement.property.balance.value * 0.04//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.02 +//射门力量
                ability.power.property.jumping.value * 0.07 +//弹跳
                ability.power.property.stamina.value * 0.04 +//体能
                ability.power.property.strength.value * 0.07 +//强壮
                ability.power.property.longShots.value * 0.02//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0.05 +//侵略性
                ability.mentality.property.interceptions.value * 0.05 +//拦截意识
                ability.mentality.property.positioning.value * 0.01 +//跑位
                ability.mentality.property.vision.value * 0.01 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.06 +//盯人
                ability.defending.property.standingTackle.value * 0.06 +//抢断
                ability.defending.property.slidingTackle.value * 0.07//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'RB',
            value: (//进攻
                ability.attacking.property.crossing.value * 0.06 +//传中
                ability.attacking.property.finishing.value * 0.03 +//射术
                ability.attacking.property.heading.value * 0.05 +//头球
                ability.attacking.property.shortPassing.value * 0.05 +//短传
                ability.attacking.property.volleys.value * 0.02//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0.03 +//盘带
                ability.skill.property.curve.value * 0.02 +//弧线
                ability.skill.property.freeKick.value * 0.02 +//任意球
                ability.skill.property.longPassing.value * 0.03 +//长传
                ability.skill.property.ballControl.value * 0.06//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0.07 +//加速
                ability.movement.property.sprintSpeed.value * 0.07 +//速度
                ability.movement.property.agility.value * 0.04 +//敏捷
                ability.movement.property.reactions.value * 0.05 +//反应
                ability.movement.property.balance.value * 0.04//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0.03 +//射门力量
                ability.power.property.jumping.value * 0.04 +//弹跳
                ability.power.property.stamina.value * 0.07 +//体能
                ability.power.property.strength.value * 0.04 +//强壮
                ability.power.property.longShots.value * 0.02//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0.01 +//侵略性
                ability.mentality.property.interceptions.value * 0.05 +//拦截意识
                ability.mentality.property.positioning.value * 0.01 +//跑位
                ability.mentality.property.vision.value * 0.01 +//视野
                ability.mentality.property.penalties.value * 0.01 +//点球
                ability.mentality.property.composure.value * 0//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0.06 +//盯人
                ability.defending.property.standingTackle.value * 0.06 +//抢断
                ability.defending.property.slidingTackle.value * 0.07//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0 +//鱼跃
                ability.goalkeeping.property.handling.value * 0 +//手抛球
                ability.goalkeeping.property.kicking.value * 0 +//开球
                ability.goalkeeping.property.positioning.value * 0 +//站位
                ability.goalkeeping.property.reflexes.value * 0//反应
            )
        },
        {
            name: 'GK',
            value: (//进攻
                ability.attacking.property.crossing.value * 0 +//传中
                ability.attacking.property.finishing.value * 0 +//射术
                ability.attacking.property.heading.value * 0 +//头球
                ability.attacking.property.shortPassing.value * 0 +//短传
                ability.attacking.property.volleys.value * 0//凌空
            ) + (//技巧
                ability.skill.property.dribbling.value * 0 +//盘带
                ability.skill.property.curve.value * 0 +//弧线
                ability.skill.property.freeKick.value * 0 +//任意球
                ability.skill.property.longPassing.value * 0 +//长传
                ability.skill.property.ballControl.value * 0//控球
            ) + (//移动
                ability.movement.property.acceleration.value * 0 +//加速
                ability.movement.property.sprintSpeed.value * 0 +//速度
                ability.movement.property.agility.value * 0.1 +//敏捷
                ability.movement.property.reactions.value * 0.1 +//反应
                ability.movement.property.balance.value * 0//平衡
            ) + (//力量
                ability.power.property.shotPower.value * 0 +//射门力量
                ability.power.property.jumping.value * 0 +//弹跳
                ability.power.property.stamina.value * 0 +//体能
                ability.power.property.strength.value * 0 +//强壮
                ability.power.property.longShots.value * 0//远射
            ) + (//心理
                ability.mentality.property.aggression.value * 0 +//侵略性
                ability.mentality.property.interceptions.value * 0 +//拦截意识
                ability.mentality.property.positioning.value * 0 +//跑位
                ability.mentality.property.vision.value * 0 +//视野
                ability.mentality.property.penalties.value * 0 +//点球
                ability.mentality.property.composure.value * 0//沉着
            ) + (//防守
                ability.defending.property.marking.value * 0 +//盯人
                ability.defending.property.standingTackle.value * 0 +//抢断
                ability.defending.property.slidingTackle.value * 0//铲球
            ) + (//守门
                ability.goalkeeping.property.diving.value * 0.22 +//鱼跃
                ability.goalkeeping.property.handling.value * 0.22 +//手抛球
                ability.goalkeeping.property.kicking.value * 0.22 +//开球
                ability.goalkeeping.property.positioning.value * 0.22 +//站位
                ability.goalkeeping.property.reflexes.value * 0.22//反应
            )
        }
    ];
}