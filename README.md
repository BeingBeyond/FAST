# General Humanoid Whole-Body Control via Pretraining and Fast Adaptation
<div align="center">

[[Website]](https://beingbeyond.github.io/FAST/)
[[arXiv]](https://arxiv.org/abs/2602.xxxxx)

[![Python Version](https://img.shields.io/badge/Python-3.10-blue.svg)]()
[![GitHub license](https://img.shields.io/badge/MIT-blue)]()

![](docs/images/FAST_Framework.png)

</div>

Learning a general whole-body controller for humanoid robots remains challenging due to the diversity of motion distributions, the difficulty of fast adaptation, and the need for robust balance in physically inconsistent or high-dynamic scenarios. Existing approaches often require task-specific training or suffer from performance degradation when adapting to new motions without access to source-domain data. In this paper, we present FAST, a general humanoid whole-body control framework that emphasizes fast adaptation and stable motion tracking. FAST introduces Parseval-Guided Residual Policy Adaptation, which learns a lightweight delta action policy under orthogonality and KL constraints, enabling efficient adaptation to out-of-distribution motions while mitigating catastrophic forgetting. To further improve physical robustness, we propose Center-of-Mass-Aware Control, which incorporates CoM-related observations and objectives to enhance balance when tracking challenging or imperfect reference motions. Extensive experiments in simulation and real-world deployment demonstrate that FAST consistently outperforms state-of-the-art baselines in robustness, adaptation efficiency, and generalization. Our results suggest that FAST provides a practical and scalable solution for general humanoid whole-body control across heterogeneous motion distributions and deployment scenarios. Real-robot videos are available on our [[Website]](https://beingbeyond.github.io/FAST).


## Citation
If you find our work useful, please consider citing us!
```
@article{wang2026fast,
  title={General Humanoid Whole-Body Control via Pretraining and Fast Adaptation},
  author={Zepeng Wang and Jiangxing Wang and Shiqing Yao and Yu Zhang and Ziluo Ding and Ming Yang and Yuxuan Wang and Haobin Jiang and Zongqing Lu},
  journal={arXiv preprint arXiv:2602.xxxxx},
  year={2026}
}
```
