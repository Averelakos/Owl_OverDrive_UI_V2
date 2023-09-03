﻿using Owl.Overdrive.Domain.Entities.Base;

namespace Owl.Overdrive.Domain.Entities.Game
{
    /// <summary>
    /// Data about the supported multiplayer types
    /// </summary>
    /// <seealso cref="Owl.Overdrive.Domain.Entities.Base.BaseEntity" />
    public class MultiplayerMode: BaseEntity
    {
        /// <summary>
        /// True if the game supports campaign coop.
        /// </summary>
        public bool CampaignCoop { get; set; } = false;
        /// <summary>
        /// True if the game supports drop in/out multiplayer
        /// </summary>
        public bool DropIn { get; set; } = false;
        /// <summary>
        /// True if the game supports LAN coop
        /// </summary>
        public bool LanCoop { get; set; } = false;
        /// <summary>
        /// True if the game supports offline coop
        /// </summary>
        public bool OfflineCoop { get; set; } = false;
        /// <summary>
        /// Maximum number of offline players in offline coop
        /// </summary>
        public int OfflineCoopMax { get; set; }
        /// <summary>
        /// Maximum number of players in offline multiplayer
        /// </summary>
        public int OfflineMax { get; set; }
        /// <summary>
        /// True if the game supports online coop
        /// </summary>
        public bool OnlineCoop { get; set; } = false;
        /// <summary>
        /// Maximum number of online players in online coop
        /// </summary>
        public int OnlineCoopMax { get; set; }
        /// <summary>
        /// Maximum number of players in online multiplayer
        /// </summary>
        public int OnlineMax { get; set; }
        /// <summary>
        /// True if the game supports split screen, offline multiplayer
        /// </summary>
        public bool SplitScreen { get; set; } = false;
        /// <summary>
        /// 	True if the game supports split screen, online multiplayer
        /// </summary>
        public bool SplitScreenOnline { get; set; }  = false;
        /// <summary>
        /// The game this multiplayer mode is associated with
        /// </summary>
        public long GameId { get; set; }
        /// <summary>
        /// The platform this multiplayer mode refers to
        /// </summary>
        public long PlatformId { get; set; }

        public virtual Game Game { get; set; } = null!;
        public virtual Platform Platform { get; set; } = null!;
    }
}