FROM faddat/sos-full

ENV GOPATH=/root/go
ENV PATH=$PATH:/root/go/bin


# Set Hostname
RUN echo "gaia" > /etc/hostname && \
# Build Gaia and clean up.  Later use a pkgbuild
      git clone https://github.com/cosmos/gaia && \
      cd gaia && \
      make install && \
      mv $(which gaiad) /usr/bin && \
      mv $(which gaiacli) /usr/bin && \
      cd .. && \
      rm -rf gaia && \
      pacman -R go go-ipfs fish zerotier-one
      
      
# Make gaia user, spn hostname so we get gaia.local via mdns
RUN useradd --create-home gaia && \
        echo "gaia" > /etc/hostname && \
        echo "gaia:gaia" | chpasswd && \
        usermod --append --groups wheel spn && \
        passwd -e root

