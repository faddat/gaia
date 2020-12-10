FROM faddat/sos-full

ENV GOPATH=/root/go
ENV PATH=$PATH:/root/go/bin

RUN pacman -Syyu --noconfirm go && \
      echo "gaia" > /etc/hostname && \
      git clone https://github.com/cosmos/gaia && \
      cd gaia && \
      make install && \
      mv $(which gaiad) /usr/bin && \
      mv $(which gaiacli) /usr/bin
      
      
# Make SPN user, spn hostname so we get spn.local via mdns
RUN useradd --create-home spn && \
        echo "gaia" > /etc/hostname && \
        echo "gaia:gaia" | chpasswd && \
        usermod --append --groups wheel spn
