# General Humanoid Whole-Body Control via Pretraining and Fast Adaptation
<div align="center">

[[Blog]](https://research.beingbeyond.com/fast)
[[Website]](https://beingbeyond.github.io/FAST/)
[[arXiv]](https://arxiv.org/abs/2602.xxxxx)

[![Python Version](https://img.shields.io/badge/Python-3.10-blue.svg)]()
[![GitHub license](https://img.shields.io/badge/MIT-blue)]()

![](docs/images/FAST_Framework.png)

</div>

Learning a general whole-body controller for humanoid robots remains challenging due to the diversity of motion distributions, the difficulty of fast adaptation, and the need for robust balance in high-dynamic scenarios. Existing approaches often require task-specific training or suffer from performance degradation when adapting to new motions. In this paper, we present **FAST**, a general humanoid whole-body control framework that enables <u>F</u>ast <u>A</u>daptation and <u>S</u>table Motion <u>T</u>racking. FAST introduces Parseval-Guided Residual Policy Adaptation, which learns a lightweight delta action policy under orthogonality and KL constraints, enabling efficient adaptation to out-of-distribution motions while mitigating catastrophic forgetting. To further improve physical robustness, we propose Center-of-Mass-Aware Control, which incorporates CoM-related observations and objectives to enhance balance when tracking challenging reference motions. Extensive experiments in simulation and real-world deployment demonstrate that FAST consistently outperforms state-of-the-art baselines in robustness, adaptation efficiency, and generalization.


## Citation
If you find our work useful, please consider citing us!
```
@article{wang2026fast,
  title={General Humanoid Whole-Body Control via Pretraining and Fast Adaptation},
  author={Zepeng Wang and Jiangxing Wang and Shiqing Yao and Yu Zhang and Ziluo Ding and Ming Yang and Yuxuan Wang and Haobin Jiang and and Chao Ma and Xiaochuan Shi and Zongqing Lu},
  journal={arXiv preprint arXiv:2602.xxxxx},
  year={2026}
}
```
